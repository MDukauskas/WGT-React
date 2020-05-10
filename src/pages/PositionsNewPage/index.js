import React, { useState, useEffect } from 'react'
import { InputGroup, Card, Button, Menu, Tabs, Notification, Table, UserItem } from '../../components'
import './index.scss'
import { useParams, Link } from 'react-router-dom';

import saveIcon from '../../assets/save.svg';
// import vector1black from '../../assets/vector1black.svg';
import { makeRequest } from '../../Services'
import { connect } from 'react-redux'
import { getUsersList, fetchUsers } from '../../store'
import { useCrud } from '../../Services';

export const PositionsNewPageComponent = ({ users, fetchUsers }) => {
    const { id } = useParams()

    const [position, setPosition] = useState({})
    const [showDelete, setShowDelete] = useState(false)

    const positionUsers = users.filter(x => +x.positionId === +id)
    const { create, update, remove, showNotifications } = useCrud(id, 'position', position)

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
        <InputGroup label="Department name" type="text" value={position.name} onChange={value => setPosition({ ...position, name: value })} />
        <div className="newdepartment_content-button">
            <Button primary onClick={save}> <img src={saveIcon} alt="save" /> Save</Button>
            <Link to="/positions" style={{ textDecoration: 'none' }}><Button>Cancel</Button></Link>
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
        ]} data={positionUsers} render={(item) => (<UserItem user={item} />)} />
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

const mapStateToProps = (state) => ({
    users: getUsersList(state),
})

const mapDispatchToProps = {
    fetchUsers,
}

export const PositionsNewPage = connect(mapStateToProps, mapDispatchToProps)(PositionsNewPageComponent)