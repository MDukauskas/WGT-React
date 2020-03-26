import React, { useState, useEffect } from 'react'
import { InputGroup, Button, Menu, Tabs, Card, Notification } from '../../components'
import './index.scss'

import saveIcon from '../../assets/save.svg';
import newuser from '../../assets/newuser.svg';
import { useParams, Link } from 'react-router-dom';

export const UserNewPage = () => {
    const { id } = useParams()

    const [user, setuser] = useState({})
    const [showNotifications, setShowNotifications] = useState(false)
    const [department, setDepartment] = useState([])

    useEffect(() => {
        if (id === "new") {
            return
        }
        const authKey = localStorage.getItem('auth_key')
        fetch(`http://localhost:3002/api/user/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            }
        }).then((response) => {
            if (!response.ok) { throw response }
            return response.json()
        }).then(data => {
            setuser(data)
        }).catch(error => {
            if (error.status === 401) {
                window.location.href = '/'
            } else {
                console.error(error)
            }
        })
    }, [id])

    useEffect(() => {
        if (id === "new") {
            return
        }
        const authKey = localStorage.getItem('auth_key')
        fetch(`http://localhost:3002/api/department`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            }
        }).then((response) => {
            if (!response.ok) { throw response }
            return response.json()
        }).then(data => {
            setDepartment(data)
        }).catch(error => {
            if (error.status === 401) {
                window.location.href = '/'
            } else {
                console.error(error)
            }
        })
    }, [id])

    function save() {

        const authKey = localStorage.getItem('auth_key')
        fetch(id === 'new' ? 'http://localhost:3002/api/user' : `http://localhost:3002/api/user/${id}`, {
            method: id === 'new' ? 'POST' : 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            body: JSON.stringify(user)
        }).then((response) => {
            if (!response.ok) { throw response }
        }).then(() => {
            setShowNotifications(true)
            setTimeout(() => { setShowNotifications(false) }, 5000)
        }).catch(error => {
            if (error.status === 401) {
                window.location.href = '/'
            } else {
                console.error(error)
            }
        })
    }

    function remove() {

        const authKey = localStorage.getItem('auth_key')
        fetch(`http://localhost:3002/api/user/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
        }).then((response) => {
            if (!response.ok) { throw response }
        }).then(() => {
            window.location.href = '/users'
        }).catch(error => {
            if (error.status === 401) {
                window.location.href = '/'
            } else {
                console.error(error)
            }
        })
    }

    const [showDelete, setShowDelete] = useState(false)

    const generalInforamtionTab = <div className="newuser_body">
        <div className="newuser_conten1">
            <InputGroup label="Name" type="text" value={user.name} onChange={value => setuser({ ...user, name: value })} />
            <InputGroup label="Surname" type="text" value={user.surname} onChange={value => setuser({ ...user, surname: value })} />
            <InputGroup label="Position" type="select" />
            <InputGroup label="Department" type="select" />
            <div className="newuser_conten1-button">
                <Button primary onClick={save}> <img src={saveIcon} alt="save" /> Save</Button>
                <Link to="/users" style={{ textDecoration: 'none' }}><Button>Cancel</Button></Link>
            </div>
        </div>
        <div className="newuser_conten2">
            <img src={newuser} alt="newuser" />
        </div>
    </div>

    const commentTab = <div className="newuser_body">
        <div className="newuser_conten1">
            <InputGroup label="Comments" type="text" value={user.comment} onChange={value => setuser({ ...user, comment: value })} />
            <div className="newuser_conten1-button">
                <Button primary onClick={save}> <img src={saveIcon} alt="save" /> Save</Button>
                <Link to="/users" style={{ textDecoration: 'none' }}><Button>Cancel</Button></Link>
            </div>
        </div>
    </div>

    return (
        <div className="newuser">
            <Menu />
            {showDelete
                ?
                <div className="newuser_menu">
                    <div className="newuser__header">
                        <h2>{user.name}</h2>
                    </div>
                    <div className="newuser__body">
                        <Card title={`Are you sure you want to delete user ${user.name} ?`}>
                            <div className="newuser__button">
                                <Button danger onClick={remove}> <img src={saveIcon} alt="save" /> Delete User </Button>
                                <Button onClick={() => setShowDelete(false)}>Cancel</Button>
                            </div>
                        </Card>
                    </div>
                </div>
                :
                <div className="newuser_menu">
                    <div className="newuser__header">
                        {id === "new" ? <h2>New user</h2> : <h2>{user.name}</h2>}
                        <Button onClick={() => setShowDelete(true)}><img src={saveIcon} alt="save" /> Delete user</Button>
                    </div>
                    <Tabs tabs={[{
                        title: 'General information',
                        content: generalInforamtionTab,
                    }, {
                        title: 'Comments',
                        content: commentTab,
                    }]}
                    />
                </div>
            }
            {
                showNotifications &&
                <div className="content-notification">
                    <Notification type="success" > New user successfully saved</Notification>
                </div>
            }
        </div >
    )
}