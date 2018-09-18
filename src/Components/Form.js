import React from 'react';
const Form = (props) => {    
    return (
        <form>
            <select onChange={(e)=> props.setBody(e.target.value)}>
                <option value='strat'>Stratocaster</option>
                <option value='les-paul'>Gibson Les Paul</option>
            </select>
        </form>
    );
}

export default Form;