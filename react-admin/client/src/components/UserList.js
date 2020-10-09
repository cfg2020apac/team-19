import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, NumberField, BooleanField } from 'react-admin'

const UserList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <NumberField source='id' />
                <TextField source='client_manager' />
                <TextField source='name' />
                <TextField source='contact_number' />
                <TextField source='cause' />
                <TextField source='gender' />
                <NumberField source='income' />
                <TextField source='employmentStatus' />
                <TextField source='mentalHealth' />
                <BooleanField source='drinker' />
                <BooleanField source='smoker' />
                <EditButton basePath='/clients' />
                <DeleteButton basePath='/clients' />
            </Datagrid>
        </List>
    )
}

export default UserList