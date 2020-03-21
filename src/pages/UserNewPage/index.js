import React, { useState, useEffect } from 'react'
import { InputGroup, Button, Menu, Tabs, Card } from '../../components'
import './index.scss'

import save from '../../assets/save.svg';
import newuser from '../../assets/newuser.svg';
import loading from '../../assets/loading.svg';
import { useParams, Link } from 'react-router-dom';

export const UserNewPage = () => {
    const { id } = useParams()

    const [user, setuser] = useState({})

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
    }, [])

    const [showDelete, setShowDelete] = useState(false)

    const newUserForm = <div className="newuser_body">
        <div className="newuser_conten1">
            <InputGroup label="Name" type="text" value={user.name} />
            <InputGroup label="Surname" type="text" value={user.surname} />
            <InputGroup label="Position" type="select" />
            <InputGroup label="Department" type="select" />
            <div className="newuser_conten1-button">
                <Button primary> <img src={save} alt="save" /> Save</Button>
                <Link to="/users" style={{ textDecoration: 'none' }}><Button>Cancel</Button></Link>
            </div>
        </div>
        <div className="newuser_conten2">
            <img src={newuser} alt="newuser" />
        </div>
    </div>

    const newUserComment = <div className="newuser_body">
        <div className="newuser_conten1">
            <InputGroup label="Comments" type="text" value={user.comment} />
            <div className="newuser_conten1-button">
                <Button primary> <img src={save} alt="save" /> Save</Button>
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
                                <Button danger> <img src={save} alt="save" /> Delete User </Button>
                                <Button onClick={() => setShowDelete(false)}>Cancel</Button>
                            </div>
                        </Card>
                    </div>
                </div>
                :
                <div className="newuser_menu">
                    <div className="newuser__header">
                        {id === "new" ? <h2>New user</h2> : <h2>{user.name}</h2>}
                        <Button onClick={() => setShowDelete(true)}><img src={save} alt="save" /> Delete user</Button>
                    </div>
                    <Tabs tabs={[{
                        title: 'General information',
                        content: newUserForm,
                    }, {
                        title: 'Comments',
                        content: newUserComment,
                    }]}
                    />
                </div>

            }
        </div >
    )
}