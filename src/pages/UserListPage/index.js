import React, { useState } from 'react'
import { InputGroup, Card, Button, Menu } from '../../components'
import './index.scss'

export const UserListPage = () => {

    return (
        <div className="userside">
            <Menu />
            <div className="content">
                <div className="content-header">
                    <p>Users</p>
                    <Button primary> New User</Button>
                </div>
                <div className="rectangle"></div>
                <div className="content-body">
                    <p>Ieva</p>
                </div>
            </div>
        </div>
    );
}