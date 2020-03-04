import React, { useState } from 'react'
import { InputGroup, Card, Button, Menu, Tabs } from '../../components'
import './index.scss'

import save from '../../assets/save.svg';
import newuser from '../../assets/newuser.svg';

export const UserNewPage = () => {

    const newUserForm = <div className="newuser_body">
        <div className="newuser_conten1">
            <InputGroup label="Name" type="text" />
            <InputGroup label="Surname" type="text" />
            <InputGroup label="Position" type="select" />
            <InputGroup label="Department" type="select" />
            <div className="newuser_conten1-button">
                <Button primary> <img src={save} alt="save" /> Save</Button>
                <Button> Cancel</Button>
            </div>
        </div>
        <div className="newuser_conten2">
            <img src={newuser} alt="newuser" />
        </div>
    </div>

    const newUserComment = <div className="newuser_body">
        <div className="newuser_conten1">
            <InputGroup label="Comments" type="text" />
            <div className="newuser_conten1-button">
                <Button primary> <img src={save} alt="save" /> Save</Button>
                <Button> Cancel</Button>
            </div>
        </div>
    </div>

    return (
        <div className="newuser">
            <Menu />
            <div className="newuser_menu">
                <h2>New User</h2>
                <Tabs tabs={[{
                    title: 'General information',
                    content: newUserForm,
                }, {
                    title: 'Comments',
                    content: newUserComment,
                }]}
                />
            </div>
        </div>
    )
}