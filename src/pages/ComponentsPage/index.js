import React from 'react'

import save from '../../assets/save.svg';
import loading from '../../assets/loading.svg';

import { Notification, Button, Card, InputGroup, Tabs, Menu } from '../../components';
import './index.scss'

const tabs = [{
    title: 'Card with tabs 1',
    content: 'Content 1'
}, {
    title: 'Card with tabs 2',
    content: 'Content 2'
}, {
    title: 'Card with tabs 3',
    content: 'Content 3'
}]


export const ComponentsPage = (props) => {
    return <React.Fragment>
        <div className="column">
            <Card title="Text Input">
                <InputGroup type="text" />
                <InputGroup label="Text Input Label" error="Text Input Error" type="text" />
                <InputGroup label="Text Input Label" type="text" />
            </Card>
            <Card title="Select Inputs">
                <InputGroup type="select" />
                <InputGroup label="Text Select Label" error="Text Input Error" type="select" />
                <InputGroup label="Text Select Label" type="select" />
            </Card>
        </div>
        <div className="column">
            <Card title="Buttons">
                <p>Primary</p>
                <div className="direction">
                    <div>
                        <span className="label">Default</span>
                        <Button primary> Button</Button>
                    </div>
                    <div>
                        <span className="label">With Icon</span>
                        <Button primary> <img src={save} alt="save" /> Button</Button>
                    </div>
                    <div>
                        <span className="label">Loading</span>
                        <Button primary> <img src={loading} className="loading" alt="loading" /> Loading</Button>
                    </div>
                </div>
                <br /><br />
                <div className="direction">
                    <div>
                        <span className="label">Default</span>
                        <Button> Button</Button>
                    </div>
                    <div>
                        <span className="label">Default</span>
                        <Button> <img src={save} alt="save" /> Button</Button>
                    </div>
                    <div>
                        <span className="label">Default</span>
                        <Button><img src={loading} className="loading" alt="loading" /> Loading</Button>
                    </div>
                </div>
                <br /><br />
                <div className="direction">
                    <div>
                        <span className="label">Delete</span>
                        <Button danger> Button</Button>
                    </div>
                    <div>
                        <span className="label">Delete</span>
                        <Button danger> <img src={save} alt="save" /> Button</Button>
                    </div>
                    <div>
                        <span className="label">Delete</span>
                        <Button danger><img src={loading} className="loading" alt="loading" /> Loading</Button>
                    </div>
                </div>
            </Card>
            <Card title="Notifications">
                <Notification type="success">Success notification example</Notification>
                <Notification type="error">Error notification example</Notification>
                <Notification type="info">Info notification example</Notification>
            </Card>
            <Card title="Card with just one tab" />
            <Tabs tabs={tabs} />
            <Card title="Card with table date">
                <table className="columns_header">
                    <thead>
                        <tr>
                            <th>Columns Header</th>
                            <th>Columns Header</th>
                            <th>Columns Header</th>
                            <th>Columns Header</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Columns value</td>
                            <td>Columns value</td>
                            <td>Columns value</td>
                            <td>Columns value</td>
                        </tr>
                        <tr>
                            <td>Columns value</td>
                            <td>Columns value</td>
                            <td>Columns value</td>
                            <td>Columns value</td>
                        </tr>
                        <tr>
                            <td>Columns value</td>
                            <td>Columns value</td>
                            <td>Columns value</td>
                            <td>Columns value</td>
                        </tr>
                        <tr>
                            <td>Columns value</td>
                            <td>Columns value</td>
                            <td>Columns value</td>
                            <td>Columns value</td>
                        </tr>
                    </tbody>
                </table>
            </Card>
            <Menu />
        </div>
    </React.Fragment>
}

