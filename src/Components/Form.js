import React from 'react';
import './Form.css';
const Form = (props) => {    
    return (
        <form className='form-component'>
        <label>Choose a body style - Stratocaster or Les Paul:
            <select onChange={(e)=> props.setBody(e.target.value)} defaultValue='choose'>
                <option value='choose' disabled>Please choose a body style</option>
                <option value='strat'>Fender Stratocaster</option>
                <option value='les-paul'>Gibson Les Paul</option>
            </select>
        </label>
        <label>Choose Left-Handed or Right-Handed:
            <select onChange={(e)=> props.setHand(e.target.value)} defaultValue = 'choose'>
                <option value='choose' disabled>Please choose a hand orientation</option>
                <option value='left'>Left-Handed</option>
                <option value='right'>Right-Handed</option>
            </select>
        </label>
        <label>Choose a color for the body: 
            <select onChange={(e)=> props.setPaint(e.target.value)} defaultValue = 'choose'>
                <option value='choose' disabled>Please choose a body color</option>
                <option value='maroon'>Maroon</option>
                <option value='#ADCEBE'>Surf Green</option>
                <option value='#fffff6'>White</option>
                <option value='purple'>Purple</option>
                <option value='black'>Black</option>
                <option value="url(#metallic-teal)">Metallic Teal</option>
                <option value="url(#metallic-blue)">Metallic Blue</option>
                <option value="url(#metallic-burnt-orange)">Metallic Burnt Orange</option>
                <option value="url(#metallic-gold)">Metallic Gold</option>
                <option value="url(#metallic-gray)">Metallic Gray</option>
                <option value="url(#metallic-purple)">Metallic Purple</option>
                <option value="url(#clear)">Clear Finish</option>
            </select>
        </label>
        <label>Choose a color for the pickguard:
            <select onChange={(e)=> props.setPickguard(e.target.value)} defaultValue = 'choose'>
                <option value='choose' disabled>Please choose a pickguard color</option>
                <option value='maroon'>Maroon</option>
                <option value='#ADCEBE'>Surf Green</option>
                <option value='white'>White</option>
                <option value='purple'>Purple</option>
                <option value='black'>Black</option>
            </select>
        </label>
        </form>
    );
}

export default Form;