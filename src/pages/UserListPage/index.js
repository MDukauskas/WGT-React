import React, { useState, useEffect } from 'react'
import { Button, Menu, Pagination, UserItem } from '../../components'
import './index.scss'
// import vector1black from '../../assets/vector1black.svg';
import { Link } from 'react-router-dom'
import { makeRequest } from '../../Services'
import { connect } from 'react-redux'
import { getUsersList, setUsers, setDepartments, setPositions } from '../../store'

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

const UserListPageComponent = ({ users, setUsers, setDepartments, setPositions }) => {
    const [loading, setLoadoing] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
        setLoadoing(true)
        makeRequest('/user')
            .then(data => {
                setUsers(data)
                setLoadoing(false)
            })
    }, [setUsers])


    useEffect(() => {
        makeRequest('/position')
            .then(data => {
                setPositions(data)
            })
    }, [])


    useEffect(() => {
        makeRequest('/department')
            .then(data => {
                setDepartments(data)
            })
    }, [])

    const indexOfLastUser = currentPage * itemsPerPage
    const indexOfFirstUser = indexOfLastUser - itemsPerPage
    const currentUser = users.slice(indexOfFirstUser, indexOfLastUser)

    return (
        <div className="userside">
            <Menu />
            <div className="content">
                <div className="content-header">
                    <p>Users</p>
                    <Link to="/users/new"><Button primary> New User</Button></Link>
                </div>
                <div className="rectangle"><div className="rectangle-orange"></div></div>

                <div className="content-body">
                    <p>Loading...</p>
                    <p>There are no data to show currently. <span className="content-body--orange"> Create new user</span></p>
                    {/* <Table headers={[
                        'Name',
                        'Surname',
                        'Photo',
                        'Comments',
                        'Department',
                        'Position'
                    ]} data={users} render={(item) => (<UserItem user={item}/>)} /> */}
                    <table className="columns_header">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Photo</th>
                                <th>Comments</th>
                                <th>Department</th>
                                <th>Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUser.map((user, id) => <UserItem user={user} />)}
                        </tbody>
                    </table>
                </div>
                < Pagination itemsPerPage={itemsPerPage} totalItems={users.length} onPageChange={page => setCurrentPage(page)} currentPage={currentPage} />
            </div>
        </div >
    );
}

const mapStateToProps = (state) => ({
    users: getUsersList(state)
})

const mapDispatchToProps = {
    setUsers,
    setDepartments,
    setPositions,
}

export const UserListPage = connect(mapStateToProps, mapDispatchToProps)(UserListPageComponent)