import React, { useState, useEffect } from 'react'
import { Button, Menu, Pagination, UserItem, Loading, Table } from '../../components'
import './index.scss'
// import vector1black from '../../assets/vector1black.svg';
import { Link } from 'react-router-dom'
import { makeRequest } from '../../Services'
import { connect } from 'react-redux'
import { getUsersList, setDepartments, setPositions, getUsersLoading, fetchUsers } from '../../store'

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

// not show loading

const UserListPageComponent = ({ users, setDepartments, setPositions, fetchUsers, isLoading }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
        fetchUsers()
    }, [])


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

                <div className="content-body">
                    {users.length === 0 ? <p>There are no data to show currently. <Link to="/users/new"> Create new user</Link></p> : ""}
                    {
                        isLoading && <Loading />
                    }
                    {!isLoading &&
                        <Table headers={[
                            'Photo',
                            'Name',
                            'Surname',
                            'Position',
                            'Department',
                            'Comments'
                        ]} data={currentUser} render={(item) => (<UserItem user={item} />)} />
                    }
                </div>
                < Pagination itemsPerPage={itemsPerPage} totalItems={users.length} onPageChange={page => setCurrentPage(page)} currentPage={currentPage} />
            </div>
        </div >
    );
}

const mapStateToProps = (state) => ({
    users: getUsersList(state),
    isLoading: getUsersLoading(state)
})

const mapDispatchToProps = {
    fetchUsers,
    setDepartments,
    setPositions,
}

export const UserListPage = connect(mapStateToProps, mapDispatchToProps)(UserListPageComponent)