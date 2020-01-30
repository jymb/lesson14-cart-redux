/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Message from '../components/Message';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function MessageContainer(props) {
    var { message } = props;
    return (
        <Message message={message}/>
    );
}

MessageContainer.propTypes = {
    message : PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        message : state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);
