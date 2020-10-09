import React from 'react'
import { Create, SimpleForm, TextInput, NumberInput, BooleanInput } from 'react-admin'

export default function UserCreate(props) {
    return (
        <Create title='Create Client Detail' {...props}>
            <SimpleForm>
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
        </Create>
    )
}
