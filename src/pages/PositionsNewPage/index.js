import React, { useState, useEffect } from 'react'
import { InputGroup, Card, Button, Menu, Tabs, Notification } from '../../components'
import './index.scss'
import { useParams, Link } from 'react-router-dom';

import saveIcon from '../../assets/save.svg';
// import vector1black from '../../assets/vector1black.svg';
import { makeRequest } from '../../Services'

export const PositionsNewPage = () => {
    const { id } = useParams()

    const [position, setPosition] = useState({})
    const [showNotifications, setShowNotifications] = useState(false)
    const [users, setusers] = useState([])
    const [showDelete, setShowDelete] = useState(false)

    useEffect(() => {
        if (id === "new") {
            return
        }
        makeRequest(`/position/${id}`)
            .then(data => {
                setPosition(data)
            })
    }, [id])


    useEffect(() => {
        makeRequest('/user')
            .then(data => {
                setusers(data)
            })
    }, [])

    const save = () => {
        if (id === 'new') {
            add()
        } else {
            update()
        }
    }

    const add = () => {
        makeRequest('/position', { method: 'POST', body: JSON.stringify(position) }).then(() => {
            setShowNotifications(true)
            setTimeout(() => { setShowNotifications(false) }, 5000)
        })
    }

    const update = () => {
        makeRequest(`/position/${id}`, { method: 'PUT', body: JSON.stringify(position) }).then(() => {
            setShowNotifications(true)
            setTimeout(() => { setShowNotifications(false) }, 5000)
        })
    }

    function remove() {
        makeRequest(`/position/${id}`, { method: 'DELETE' }).then(() => {
            window.location.href = '/positions'
        })
    }


    const content1 = <div className="newdepartment_content">
        <InputGroup label="Department name" type="text" value={position.name} onChange={value => setPosition({ ...position, name: value })} />
        <div className="newdepartment_content-button">
            <Button primary onClick={save}> <img src={saveIcon} alt="save" /> Save</Button>
            <Link to="/positions" style={{ textDecoration: 'none' }}><Button>Cancel</Button></Link>
        </div>
    </div >

    const content2 = <div className="userside1">
        <table className="columns_header">
            <tbody>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Comments</th>
                </tr>
                {users.map((user, id) =>
                    < tr key={id}>
                        <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                        <td>{user.surname}</td>
                        <td> <img src={user.photo} alt="vector1black" />{}</td>
                        <td>{user.comment}</td>
                        <td>{user.departmentId}</td>
                        <td>{user.positionId}</td>
                    </tr>)}
            </tbody>
        </table>
    </div>

    return (
        <div className="newdepartment">
            <Menu />
            {showDelete ?
                <div className="newdepartment_menu">
                    <div className="newdepartment__header">
                        <h2>{position.name}</h2>
                    </div>
                    <div className="newdepartment__body">
                        <Card title={`Are you sure you want to delete department ${position.name} ?`}>
                            <div className="newdepartment_content-button">
                                <Button danger onClick={remove}> <img src={saveIcon} alt="save" /> Delete position </Button>
                                <Button onClick={() => setShowDelete(false)}>Cancel</Button>
                            </div>
                        </Card>
                    </div>
                </div>
                :
                < div className="newdepartment_menu">
                    <div className="newdepartment-header">
                        {id === "new" ? <h2>New department</h2> : <h2>{position.name}</h2>}
                        <Button onClick={() => setShowDelete(true)}><img src={saveIcon} alt="save" /> Delete position</Button>
                    </div>
                    <div className="newdepartment-body">
                        {id === "new" ?
                            <Card title="General information" >{content1}</Card>
                            :
                            <Tabs tabs={[{
                                title: 'General information',
                                content: content1,
                            }, {
                                title: 'Users',
                                content: content2,
                            }]}
                            />
                        }
                    </div>
                </div>
            }
            {
                showNotifications &&
                <div className="content-notification">
                    <Notification type="success" > Successfully saved</Notification>
                </div>
            }
        </div >
    )
}