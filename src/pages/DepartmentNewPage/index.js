import React, { useState, useEffect } from 'react'
import { InputGroup, Card, Button, SideMenu, Tabs, Notification, Table, UserItem, PageHeader, Page, MainContent, DataTable, NotificationShow } from '../../components'
import './index.scss'
import { useParams, Link } from 'react-router-dom';
import { makeRequest } from '../../Services'
import { connect } from 'react-redux'
import { getUsersList, fetchUsers } from '../../store'

import saveIcon from '../../assets/save.svg';
import { useCrud } from '../../Services';

// import vector1black from '../../assets/vector1black.svg';

export const DepartmentNewPageComponent = ({ users, fetchUsers }) => {
    const { id } = useParams()

    const [department, setDepartment] = useState({})
    const [showDelete, setShowDelete] = useState(false)

    const departmentUsers = users.filter(x => +x.departmentId === +id)

    const { create, update, remove, showNotifications } = useCrud(id, 'department', department)

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
        fetchUsers()
    }, [])

    const save = () => {
        if (id === 'new') {
            create()
        } else {
            update()
        }
    }

    const content1 = <div className="newdepartment_content">
        <InputGroup label="Department name" type="text" value={department.name} onChange={value => setDepartment({ ...department, name: value })} />
        <div className="newdepartment_content-button">
            <Button primary onClick={save}> <img src={saveIcon} alt="save" /> Save</Button>
            <Link to="/departments" style={{ textDecoration: 'none' }}><Button>Cancel</Button></Link>
        </div>
    </div >

    const content2 = <DataTable>
        <Table headers={[
            'Name',
            'Surname',
            'Photo',
            'Comments',
            'Department',
            'Position'
        ]} data={departmentUsers} render={(item) => (<UserItem user={item} />)} />
    </DataTable>

    return (
        <Page>
            <SideMenu />
            {showDelete ?
                <MainContent>
                    <PageHeader header={department.name}>
                    </PageHeader>
                    <div className="newdepartment__body">
                        <Card title={`Are you sure you want to delete department ${department.name} ?`}>
                            <div className="newdepartment_content-button">
                                <Button danger onClick={remove}> <img src={saveIcon} alt="save" /> Delete department </Button>
                                <Button onClick={() => setShowDelete(false)}>Cancel</Button>
                            </div>
                        </Card>
                    </div>
                </MainContent>
                :
                <MainContent>
                    <PageHeader header={id === "new" ? "New Department" : department.name}>
                        <Button onClick={() => setShowDelete(true)}><img src={saveIcon} alt="save" /> Delete department</Button>
                    </PageHeader>
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
                </MainContent>
            }
            {
                showNotifications &&
                <NotificationShow>
                    <Notification type="success" > Successfully saved</Notification>
                </NotificationShow>
            }
        </Page >
    )
}

const mapStateToProps = (state) => ({
    users: getUsersList(state),
})

const mapDispatchToProps = {
    fetchUsers,
}

export const DepartmentNewPage = connect(mapStateToProps, mapDispatchToProps)(DepartmentNewPageComponent)