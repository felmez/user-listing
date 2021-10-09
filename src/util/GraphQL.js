import { gql } from '@apollo/client'

export const FETCH_USERS_QUERY = gql`
    {
        getUsers{
            id
            name
            email
            role
            createdAt
        }
    }
`;