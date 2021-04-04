import React from 'react';
import { Redirect } from 'react-router-dom';

const Redirection: React.FC = () => {
    return (
        <Redirect to={{
            pathname: '/',
        }} />
    );
}

export default Redirection;