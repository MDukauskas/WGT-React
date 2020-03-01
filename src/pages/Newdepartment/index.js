import React, { useState } from 'react'
import { InputGroup, Card, Button, Menu } from '../../components'
import './index.scss'

import save from '../../save.svg';

export const Newdepartment = () => {

    return (
        <div className="newdepartment">
            <Menu />
            <div className="newdepartment_menu">
                <h2>New Department</h2>
                <div className="newdepartment-header">
                    <Card title="General information">
                        <div className="newdepartment_content">
                            <InputGroup label="Department name" type="text" />
                            <div className="newdepartment_content-button">
                                <Button primary> <img src={save} alt="save" /> Save</Button>
                                <Button> Cancel</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}