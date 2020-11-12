import React from 'react';

const PeopleList = (props) => {

    const arrayContact = props.data;

    const listItems = arrayContact.map((value, key) =>
        <li key={key}> {value} </li>
    );
    return (
        <div>
            <ul> {listItems} </ul>
        </div>
    );
}

export default PeopleList;