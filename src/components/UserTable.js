import React from 'react'
import { Table } from 'semantic-ui-react'
import moment from "moment";
import trLocale from "moment/locale/tr";

import DeleteButton from '../components/DeleteButton';

export default function UserTable({ user: { id, name, email, role, createdAt } }) {
    moment.locale('tr', [trLocale])

    return (
        <Table.Body>
            <Table.Row>
                <Table.Cell>{id}</Table.Cell>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{email}</Table.Cell>
                <Table.Cell>{role}</Table.Cell>
                <Table.Cell>{moment(createdAt).fromNow()}</Table.Cell>
                <Table.Cell>
                    <DeleteButton userID={id} />
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    )
}