import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { gql, useMutation } from '@apollo/client';

import { useForm } from '../util/Hooks'
import { FETCH_USERS_QUERY } from '../util/GraphQL';

const CREATE_USER_MUTATION = gql`
    mutation createUser(
        $name: String!
        $email: String!
        $role: String!
        $password: String!
        $confirmPassword: String!
    ) {
        createUser(
            createInput: {
                name: $name
                email: $email
                role: $role
                password: $password
                confirmPassword: $confirmPassword
            }
        ){
            id
            name
            email
            role
            createdAt
        }
    }
`

export default function UserForm() {
    const [errors, setErrors] = useState({});

    const { onChange, onSubmit, values } = useForm(createUserCallBack, {
        name: '',
        email: '',
        password: '',
        role: '',
        confirmPassword: ''
    })

    function resetInputs() {
        setErrors({});
        values.name = '';
        values.email = '';
        values.role = '';
        values.password = '';
        values.confirmPassword = '';
    }

    const [createUser, { loading }] = useMutation(CREATE_USER_MUTATION, {
        variables: values,
        update(proxy, result) {
            const data = proxy.readQuery({
                query: FETCH_USERS_QUERY,
            });
            proxy.writeQuery({
                query: FETCH_USERS_QUERY,
                data: {
                    getUsers: [result.data.createUser, ...data.getUsers],
                },
            });
            resetInputs()
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
    })

    function createUserCallBack() {
        createUser();
    }


    return (
        <div className="form-container">
            <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
                <Form.Input
                    label="??sim"
                    placeholder="??sim"
                    name="name"
                    type="text"
                    value={values.name}
                    error={errors.name ? true : false}
                    onChange={onChange} />
                <Form.Input
                    label="Email"
                    placeholder="Email"
                    name="email"
                    type="text"
                    value={values.email}
                    error={errors.email ? true : false}
                    onChange={onChange} />
                <Form.Input
                    label="Kay??t tipi"
                    placeholder="Kay??t tipi"
                    name="role"
                    type="text"
                    value={values.role}
                    error={errors.role ? true : false}
                    onChange={onChange} />
                <Form.Input
                    label="??ifre"
                    placeholder="??ifre"
                    name="password"
                    type="password"
                    value={values.password}
                    error={errors.password ? true : false}
                    onChange={onChange} />
                <Form.Input
                    label="??ifre tekrar??"
                    placeholder="??ifre tekrar??"
                    name="confirmPassword"
                    type="password"
                    value={values.confirmPassword}
                    error={errors.confirmPassword ? true : false}
                    onChange={onChange} />
                <Button type="submit" primary>
                    G??nder
                </Button>
            </Form>

            {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                    <ul className="list">
                        {Object.values(errors).map((value) => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}