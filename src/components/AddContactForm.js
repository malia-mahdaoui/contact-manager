import React, { useState } from 'react';

const AddContactForm = (props) => {

    const [contact, setContact] = useState("");

    const handleChange = (event) => {
        setContact(event.target.value);
    }

    const handleSubmit = (event) => {
        props.handleSubmit(contact);
        setContact("");
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="Add new contact" onChange={handleChange} value={contact} />

                <button type="submit" >Add</button>
            </form>
        </div>
    );
}

export default AddContactForm;