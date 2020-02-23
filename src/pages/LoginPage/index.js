import React, { useState } from 'react'
import { InputGroup, Card, Button } from '../../components'
import './index.scss'

export const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function login() {
        alert(`${username} ${password}`)
    }

    return (
        <div className="login">
            <h1>On Boarding</h1>
            <Card title="Log In">
                <InputGroup type="text" label="Username" value={username} onChange={setUsername} />
                <InputGroup type="password" label="Password" value={password} onChange={setPassword} />
                <Button onClick={login} primary>Log In</Button>
            </Card>
        </div>
    )
}