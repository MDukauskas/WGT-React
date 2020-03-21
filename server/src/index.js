const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const Resize = require("./resize");

const STATIC_URL = "/static";
const SECRET_KEY = "123456789";
const EXPIRE_IN = "1h";

const server = jsonServer.create();
const router = jsonServer.router("./src/db.json");
const userdb = JSON.parse(fs.readFileSync("./src/users.json", "UTF-8"));
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./static/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});
const upload = multer({ storage: storage });

server.use(jsonServer.defaults());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(STATIC_URL, express.static(path.join(__dirname, "../static")));

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRE_IN });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY);
}

function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      user => user.email === email && user.password === password
    ) !== -1
  );
}

const resizeMiddleware = async (req, res, next) => {
  if (req.file) {
    const imagePath = path.join(__dirname, "../static/");
    const fileUpload = new Resize(imagePath);
    const filename = await fileUpload.save(req.file.filename);
    try {
      fs.unlinkSync(imagePath + req.file.filename);
    } catch (err) {
      console.error(err);
    }
    req.body.photo = STATIC_URL + "/" + filename;
  } else {
    if (!req.body.photo) {
      req.body.photo = "";
    }
  }
  next();
};

server.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = "Incorrect email or password";
    res.status(status).json({ status, message });
    return;
  }
  const access_token = createToken({ email });
  res.status(200).json({ access_token });
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    const status = 401;
    const message = "Bad authorization header";
    res.status(status).json({ status, message });
    return;
  }
  try {
    verifyToken(req.headers.authorization.split(" ")[1]);
    next();
  } catch (err) {
    const status = 401;
    const message = "Error: access_token is not valid";
    res.status(status).json({ status, message });
  }
});

server.post("/api/user", upload.single("file"), resizeMiddleware);

server.post("/api/user/:id", upload.single("file"), resizeMiddleware);

server.put("/api/user/:id", upload.single("file"), resizeMiddleware);

server.use("/api", router);

server.listen(3002, () => {
  console.log("Run Onboarding API Server");
});
