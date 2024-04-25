import './Button.css'
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

export default function Button({ text, icon, navigation }) {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/') // rota default
    }, [navigate]);

    const goToPage = (route) => {
        navigate(route)
    };

    return(
        <button className='button' onClick={() => goToPage(navigation)}>
            <i className='icon-button'>{icon}</i>
            {text}
        </button>
    )
} 