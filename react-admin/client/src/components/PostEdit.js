import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput, NumberInput } from 'react-admin'

export default function PostEdit(props) {
    return (
        <Edit title='Edit Application Timeline' {...props}>
            <SimpleForm>
                <NumberInput disabled source='id' />
                <NumberInput source='clientId' />
                <TextInput source='type' />
                <TextInput source='progress' />
                <TextInput source='result' />
                <TextInput multiline source='notes' />
                <DateInput source='updated_at' />
            </SimpleForm>
        </Edit>
    )
}
