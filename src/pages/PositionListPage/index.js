import React, { useState, useEffect } from 'react'
import { Button, SideMenu, Pagination, LoadingBar, Table, PositionItem, PageHeader, DataTable, MainContent } from '../../components'
import './index.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPositionsList, getPositionsLoading, fetchPositions } from '../../store'

const PositionListPageComponent = ({ positions, fetchPositions, isLoading }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
        fetchPositions()
    }, [])

    const indexOfLastUser = currentPage * itemsPerPage
    const indexOfFirstUser = indexOfLastUser - itemsPerPage
    const currentPosition = positions.slice(indexOfFirstUser, indexOfLastUser)

    return (
        <div className="positions">
            <SideMenu />
            <MainContent>
                <PageHeader header="Positions">
                    <Link to="/positions/new"><Button primary> New position</Button></Link>
                </PageHeader>
                <DataTable>
                    {positions.length === 0 ? <p>There are no data to show currently. <Link to="/positions/new"> Create new department</Link></p> : ""}
                    {
                        isLoading && <LoadingBar />
                    }
                    {!isLoading &&
                        <Table headers={[
                            'Name',
                        ]} data={currentPosition} render={(item) => (<PositionItem position={item} />)} />
                    }
                </DataTable>
                < Pagination itemsPerPage={itemsPerPage} totalItems={positions.length} onPageChange={page => setCurrentPage(page)} currentPage={currentPage} />
            </MainContent>
        </div>
    )
}

const mapStateToProps = (state) => ({
    positions: getPositionsList(state),
    isLoading: getPositionsLoading(state)
})

const mapDispatchToProps = {
    fetchPositions,
}

export const PositionListPage = connect(mapStateToProps, mapDispatchToProps)(PositionListPageComponent)