import React from 'react';

export const FormErrors = props => {
    const { forField, errors = [] } = props;

    let filteredErrors = errors;

    if (forField) {
        filteredErrors = errors.filter(error => error.field.toLowerCase() === forField.toLowerCase());
    };

    if (filteredErrors.length < 1) {
        return null;
    };

    return (
        <ul>{filteredErrors.map((error, i) => {
            <li className="item" key={i}>{`${error.field} ${error.message}`}</li>
        })}
        </ul>
    )
};
