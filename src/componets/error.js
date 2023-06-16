import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="button-container">
            <h1>404</h1>
            <button onClick={handleGoHome}>Return to home</button>
        </div>
    );
};

export default Error;
