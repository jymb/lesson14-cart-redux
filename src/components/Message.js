/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Message(props) {
    return (
        <h3>
            <span className="badge amber darken-2">{ props.message }</span>
        </h3>
    );
}

export default Message;
