import React from 'react'
import { BooleanInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin'

export default function UserEdit(props) {
    return (
        <Edit title='Edit Client Details' {...props}>
            <SimpleForm>
                <NumberInput disabled source='id' />
                <TextInput source='client_manager' />
                <TextInput source='name' />
                <TextInput source='contact_number' />
                <TextInput source='cause' />
                <TextInput source='gender' />
                <NumberInput source='income' />
                <TextInput source='employmentStatus' />
                <TextInput source='mentalHealth' />
                <BooleanInput source='drinker' />
                <BooleanInput source='smoker' />
            </SimpleForm>
        </Edit>
    )
}
