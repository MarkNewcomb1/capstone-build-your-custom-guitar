import React from 'react';
import './Guitar.css';
const Guitar = (props) => {    
    return (
        <div>
            {props.body}
            {props.hand}
        </div>

    );
}

export default Guitar;