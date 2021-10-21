import React, { useState } from 'react'
import { Button, Confirm } from 'semantic-ui-react'
import { gql, useMutation } from '@apollo/client';

import { FETCH_USERS_QUERY } from '../util/GraphQL';
import CustomPopup from './CustomPopup'

const DELETE_USER_MUTATION = gql`
  mutation deleteUser($userID: ID!) {
    deleteUser(userID: $userID)
  }
`

export default function DeleteButton({ userID, callback }) {
    const [confirmOpen, setConfirmOpen] = useState(false);

    const mutation = DELETE_USER_MUTATION;

    const [deleteUser] = useMutation(mutation, {
        update(proxy) {
            setConfirmOpen(false);
            const data = proxy.readQuery({
                query: FETCH_USERS_QUERY
            });
            proxy.writeQuery({
                query: FETCH_USERS_QUERY,
                data: {
                    getUsers: data.getUsers.filter((a) => a.id !== userID)
                },
            });
            if (callback) callback();
        },
        variables: {
            userID
        }
    });

    return (
        <>
            <CustomPopup content={'Delete User'}>
                <Button circular icon="close" color="red" floated="right" onClick={() => setConfirmOpen(true)}>
                </Button>
            </CustomPopup>
            <Confirm
                open={confirmOpen}
                onCancel={() => setConfirmOpen(false)}
                onConfirm={deleteUser}
            />
        </>
    );
}

