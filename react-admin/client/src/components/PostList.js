import React from 'react'
import { List, Datagrid, TextField, DateField, NumberField, EditButton, DeleteButton } from 'react-admin'

const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <NumberField source='id' />
                <NumberField source='clientId' />
                <TextField source='type' />
                <TextField source='progress' />
                <TextField source='result' />
                <TextField multiline source='notes' />
                <DateField source='updated_at' />
                <EditButton basePath='/application_Timelines' />
                <DeleteButton basePath='/application_Timelines' />
            </Datagrid>
        </List>
    )
}

export default PostList