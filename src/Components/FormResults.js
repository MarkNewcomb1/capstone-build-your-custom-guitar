import React from 'react';

const FormResults = (props) => {
    return (
        <div className="form-results-component">
        <img src={require('../img/bycg-logo.png')} alt="logo" id="logo" />
            <h2>Thanks for purchasing! Here's the build you bought:</h2>
            <p>Body type: {props.formSubmitted.body}</p>
            <p>Left or Right-Handed: {props.formSubmitted.hand}</p>
            <p>Paint finish: {props.formSubmitted.paint}</p>
            <p>Pickguard color: {props.formSubmitted.pickguard}</p>
        </div>
    )
}

export default FormResults;