import React, { useState } from 'react'
import { InputGroup, Card, Button, Menu, Tabs } from '../../components'
import './index.scss'

import save from '../../save.svg';
import newuser from '../../newuser.svg';

const tabs = [{
    title: 'General information',
    content: <InputGroup />
}, {
    title: 'Comments',
    content: 'Content 2'
}]

export const NewUserPage = () => {

    return (
        <div className="newuser">
            <Menu />
            < div className="newuser-menu">
                <h2>New User</h2>
                <Tabs tabs={tabs} />
                <div className="newuser-body">
                    <div className="newuser-conten1">
                        <InputGroup label="Name" type="text" />
                        <InputGroup label="Surname" type="text" />
                        <InputGroup label="Position" type="select" />
                        <InputGroup label="Department" type="select" />
                        <Button primary> <img src={save} alt="save" /> Button</Button>
                        <Button> Button</Button>
                    </div>
                    <div className="newuser-conten2">
                        <img src={newuser} alt="newuser" />
                    </div>
                </div>
            </div>
        </div>
    )
}