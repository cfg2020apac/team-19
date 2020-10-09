import React from 'react'
import { Create, SimpleForm, TextInput, NumberInput, DateInput } from 'react-admin'

export default function PostCreate(props) {
    return (
        <Create title='Create an Application Timeline' {...props}>
            <SimpleForm>
                <NumberInput source='clientId' />
                <TextInput source='type' />
                <TextInput source='progress' />
                <TextInput source='result' />
                <TextInput multiline source='notes' />
                <DateInput source='updated_at' />
            </SimpleForm>
        </Create>
    )
}
