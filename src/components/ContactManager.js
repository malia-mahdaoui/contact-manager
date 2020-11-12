import React, { useState } from 'react';
import AddContactForm from './AddContactForm';
import PeopleList from './PeopleList';

const ContactManager = (props) => {

    const [contacts, setcontacts] = useState(props.data);

    const addContact = (name) => {
        setcontacts([...contacts, name]);
    }

    return (
        <div>
            <AddContactForm handleSubmit={addContact} />
            <PeopleList data={contacts} />
        </div>
    );
}

export default ContactManager;