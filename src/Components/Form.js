import React from 'react';
import './Form.css';
const Form = (props) => {    
    return (
        <form className='form-component'>
            <select onChange={(e)=> props.setBody(e.target.value)} defaultValue='choose'>
                <option value='choose' disabled>Please choose a body style</option>
                <option value='strat'>Stratocaster</option>
                <option value='les-paul'>Gibson Les Paul</option>
            </select>

            <select onChange={(e)=> props.setHand(e.target.value)} defaultValue = 'choose'>
                <option value='choose' disabled>Please choose a hand orientation</option>
                <option value='left'>Left-Handed</option>
                <option value='right'>Right-Handed</option>
            </select>

            <select onChange={(e)=> props.setPaint(e.target.value)} defaultValue = 'choose'>
                <option value='choose' disabled>Please choose a color</option>
                <option value='maroon'>Maroon</option>
                <option value='#ADCEBE'>Surf Green</option>
                <option value='#EBDFCB'>White</option>
                <option value='purple'>Purple</option>
            </select>

            <select onChange={(e)=> props.setPickguard(e.target.value)} defaultValue = 'choose'>
                <option value='choose' disabled>Please choose a color</option>
                <option value='maroon'>Maroon</option>
                <option value='#ADCEBE'>Surf Green</option>
                <option value='#EBDFCB'>White</option>
                <option value='purple'>Purple</option>
            </select>

        </form>
    );
}

export default Form;