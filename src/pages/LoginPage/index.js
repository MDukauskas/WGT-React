import React, { useState } from 'react'
import { InputGroup, Card, Button, Notification } from '../../components'
import './index.scss'
import { useHistory } from 'react-router-dom';

export const LoginPage = () => {
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showNotification, setShowNotification] = useState(false)

    function login() {
        const credentials = {
            email,
            password
        }
        fetch('http://localhost:3002/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer {{kodas}}'
            },
            body: JSON.stringify(credentials)
        }).then((response) => {
            return response.json()
        }).then(data => {
            localStorage.setItem('auth_key', data.access_token)
            history.push('/departments')
        })
    }

    return (
        <div className="login">
            <h1>On Boarding</h1>
            <Card title="Log In">
                {showNotification &&
                    <Notification type="error">Username or password is incorrect</Notification>
                }
                <InputGroup type="text" label="Email" value={email} onChange={setEmail} />
                <InputGroup type="password" label="Password" value={password} onChange={setPassword} />
                <Button onClick={login} primary>Log In</Button>
            </Card>
        </div>
    )
}