import React, { useState, useEffect } from 'react'
import { InputGroup, Card, Button, Menu, Tabs, Notification } from '../../components'
import './index.scss'
import { useParams, Link } from 'react-router-dom';

import saveIcon from '../../assets/save.svg';
import vector1black from '../../assets/vector1black.svg';

export const DepartmentNew = () => {
    const { id } = useParams()

    const [department, setDepartment] = useState({})
    const [showNotifications, setShowNotifications] = useState(false)
    const [users, setusers] = useState([])
    const [showDelete, setShowDelete] = useState(false)

    useEffect(() => {
        if (id === "new") {
            return
        }
        const authKey = localStorage.getItem('auth_key')
        fetch(`http://localhost:3002/api/department/${id}`, {
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


    useEffect(() => {
        const authKey = localStorage.getItem('auth_key')
        fetch('http://localhost:3002/api/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            }
        }).then((response) => {
            if (!response.ok) { throw response }
            return response.json()
        }).then(data => {
            setusers(data)
        }).catch(error => {
            if (error.status === 401) {
                window.location.href = '/'
            } else {
                console.error(error)
            }
        })
    }, [])

    function save() {

        const authKey = localStorage.getItem('auth_key')
        fetch(id === 'new' ? 'http://localhost:3002/api/department' : `http://localhost:3002/api/department/${id}`, {
            method: id === 'new' ? 'POST' : 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            body: JSON.stringify(department)
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
        fetch(`http://localhost:3002/api/department/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
        }).then((response) => {
            if (!response.ok) { throw response }
        }).then(() => {
            window.location.href = '/departments'
        }).catch(error => {
            if (error.status === 401) {
                window.location.href = '/'
            } else {
                console.error(error)
            }
        })
    }

    const content1 = <div className="newdepartment_content">
        <InputGroup label="Department name" type="text" value={department.name} onChange={value => setDepartment({ ...department, name: value })} />
        <div className="newdepartment_content-button">
            <Button primary onClick={save}> <img src={saveIcon} alt="save" /> Save</Button>
            <Link to="/departments" style={{ textDecoration: 'none' }}><Button>Cancel</Button></Link>
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
                        <h2>{department.name}</h2>
                    </div>
                    <div className="newdepartment__body">
                        <Card title={`Are you sure you want to delete department ${department.name} ?`}>
                            <div className="newdepartment_content-button">
                                <Button danger onClick={remove}> <img src={saveIcon} alt="save" /> Delete department </Button>
                                <Button onClick={() => setShowDelete(false)}>Cancel</Button>
                            </div>
                        </Card>
                    </div>
                </div>
                :
                < div className="newdepartment_menu">
                    <div className="newdepartment-header">
                        {id === "new" ? <h2>New department</h2> : <h2>{department.name}</h2>}
                        <Button onClick={() => setShowDelete(true)}><img src={saveIcon} alt="save" /> Delete department</Button>
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