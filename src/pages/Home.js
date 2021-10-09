import React from 'react'
import { useQuery } from '@apollo/client';
import { Grid, Table } from 'semantic-ui-react'

import { FETCH_USERS_QUERY } from '../util/GraphQL';
import UserForm from '../components/UserForm'
import UserTable from '../components/UserTable'

export default function Home() {
    const { loading, data: { getUsers: users } = {} } = useQuery(FETCH_USERS_QUERY);

    return (
        <Grid columns={4} >
            <Grid.Column>
                <UserForm></UserForm>
            </Grid.Column>
            <Grid.Column>
                {loading ? (
                    <h1>Kayıtlar yükleniyor...</h1>
                ) : (
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>ID</Table.HeaderCell>
                                <Table.HeaderCell>İsim</Table.HeaderCell>
                                <Table.HeaderCell>E-mail</Table.HeaderCell>
                                <Table.HeaderCell>Kayıt Tipi</Table.HeaderCell>
                                <Table.HeaderCell>Kayıt Tarihi</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        {
                            users &&
                            users.map((user) => (
                                <UserTable key={user.id} user={user} />
                            ))
                        }
                    </Table>
                )}
            </Grid.Column>
        </Grid>
    )
}
