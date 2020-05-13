import React, { useState, useEffect } from 'react'
import { InputGroup, Button, SideMenu, Tabs, Card, Notification, PageHeader, Page, MainContent, NotificationShow } from '../../components'
import './index.scss'
import { makeRequest } from '../../Services'

import saveIcon from '../../assets/save.svg';
import newuser from '../../assets/newuser.svg';
import { useParams, Link } from 'react-router-dom';
import { useCrud } from '../../Services';

// const UserPageExample = ({ users, loading }) => (
//     <Page>
//         <SideMenu />
//         <MainContent>
//             <PageHeader header="Users" />
//             <LoadingBar loading={loading} />
//             <DataTable date={users} />
//             <Pagination />
//         </MainContent>
//     </Page>
// )

export const UserNewPage = () => {

    const { id } = useParams()
    const [user, setuser] = useState({})
    const [positions, setPositions] = useState([])
    const [departments, setDepartments] = useState([])

    const { create, update, remove, showNotifications } = useCrud(id, 'user', user)

    useEffect(() => {
        if (id === "new") {
            return
        }
        makeRequest(`/user/${id}`)
            .then(data => {
                setuser(data)
            })
    }, [id])

    useEffect(() => {
        if (id === "new") {
            return
        }
        makeRequest(`/department`)
            .then(data => {
                setDepartments(data)
            })
    }, [id])

    useEffect(() => {
        if (id === "new") {
            return
        }
        makeRequest(`/position`)
            .then(data => {
                setPositions(data)
            })
    }, [id])

    const save = () => {
        if (id === 'new') {
            create()
        } else {
            update()
        }
    }

    const [showDelete, setShowDelete] = useState(false)

    const generalInformationTab = <div className="newuser_body">
        <div className="newuser_conten1">
            <InputGroup label="Name" type="text" value={user.name} onChange={value => setuser({ ...user, name: value })} />
            <InputGroup label="Surname" type="text" value={user.surname} onChange={value => setuser({ ...user, surname: value })} />
            <InputGroup label="Department" type="select" value={user.departmentId} onChange={value => setuser({ ...user, departmentId: parseInt(value) })} >
                <option value=""></option>
                {departments.map(department => (
                    <option key={department.id} value={department.id} >{department.name}</option>
                ))}
            </InputGroup>
            <InputGroup label="Position" type="select" value={user.positionId} onChange={value => setuser({ ...user, positionId: parseInt(value) })} >
                <option value=""></option>
                {positions.map(position => (
                    <option key={position.id} value={position.id} >{position.name}</option>
                ))}
            </InputGroup>
            <div className="newuser_conten1-button">
                <Button primary onClick={save}> <img src={saveIcon} alt="save" /> Save</Button>
                <Link to="/users" style={{ textDecoration: 'none' }}><Button>Cancel</Button></Link>
            </div>
        </div>
        <div className="newuser_conten2">
            <img src={newuser} alt="newuser" />
        </div>
    </div >

    const commentTab = <div className="newuser_body">
        <div className="newuser_conten1">
            <InputGroup label="Comments" type="text" value={user.comment} onChange={value => setuser({ ...user, comment: value })} />
            <div className="newuser_conten1-button">
                <Button primary onClick={() => { save(user) }}> <img src={saveIcon} alt="save" /> Save</Button>
                <Link to="/users" style={{ textDecoration: 'none' }}><Button>Cancel</Button></Link>
            </div>
        </div>
    </div>

    return (
        <Page>
            <SideMenu />
            {showDelete
                ?
                <MainContent>
                    <PageHeader header={user.name}>
                    </PageHeader>
                    <div className="newuser__body">
                        <Card title={`Are you sure you want to delete user ${user.name} ?`}>
                            <div className="newuser__button">
                                <Button danger onClick={remove}> <img src={saveIcon} alt="save" /> Delete User </Button>
                                <Button onClick={() => setShowDelete(false)}>Cancel</Button>
                            </div>
                        </Card>
                    </div>
                </MainContent>
                :
                <MainContent>
                    <PageHeader header={id === "new" ? 'New user' : user.name}>
                        <Button onClick={() => setShowDelete(true)}><img src={saveIcon} alt="save" /> Delete user</Button>
                    </PageHeader>
                    <Tabs tabs={[{
                        title: 'General information',
                        content: generalInformationTab,
                    }, {
                        title: 'Comments',
                        content: commentTab,
                    }]}
                    />
                </MainContent>
            }
            {
                showNotifications &&
                <NotificationShow>
                    <Notification type="success" > New user successfully saved</Notification>
                </NotificationShow>
            }
        </Page >
    )
}