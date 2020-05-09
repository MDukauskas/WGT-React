import React, { useState, useEffect } from 'react'
import { InputGroup, Card, Button, Menu, Tabs, Notification, Table, UserItem } from '../../components'
import './index.scss'
import { useParams, Link } from 'react-router-dom';
import { makeRequest } from '../../Services'

import saveIcon from '../../assets/save.svg';

// import vector1black from '../../assets/vector1black.svg';

export const DepartmentNewPage = () => {
    const { id } = useParams()

    const [department, setDepartment] = useState({})
    const [showNotifications, setShowNotifications] = useState(false)
    const [users, setusers] = useState([])
    const [showDelete, setShowDelete] = useState(false)

    useEffect(() => {
        if (id === "new") {
            return
        }
        makeRequest(`/department/${id}`)
            .then(data => {
                setDepartment(data)
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
        makeRequest('/department', { method: 'POST', body: JSON.stringify(department) }).then(() => {
            setShowNotifications(true)
            setTimeout(() => { setShowNotifications(false) }, 5000)
        })
    }

    const update = () => {
        makeRequest(`/department/${id}`, { method: 'PUT', body: JSON.stringify(department) }).then(() => {
            setShowNotifications(true)
            setTimeout(() => { setShowNotifications(false) }, 5000)
        })
    }


    function remove() {
        makeRequest(`/department/${id}`, { method: 'DELETE' }).then(() => {
            window.location.href = '/departments'
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
        <Table headers={[
            'Name',
            'Surname',
            'Photo',
            'Comments',
            'Department',
            'Position'
        ]} data={users} render={(item) => (<UserItem user={item} />)} />
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