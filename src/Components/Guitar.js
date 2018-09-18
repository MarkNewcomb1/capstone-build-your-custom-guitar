import React from 'react';
import './Guitar.css';
const Guitar = (props) => {
    // https://react-cn.github.io/react/tips/if-else-in-JSX.html
    const body = props.body;
    const hand = props.hand;

    const leftyStrat = (body === 'strat' && hand === 'left');
    const rightyStrat = (body === 'strat' && hand === 'right');
    const leftyLesPaul = (body === 'les-paul' && hand === 'left');
    const rightyLesPaul = (body === 'les-paul' && hand === 'right');

    return (
        <div>
            {leftyStrat && <h1>Body type: LEFTY STRAT</h1>}
            {/* {body === 'les-paul' ? <h1>Body type: LES PAUL</h1> : <h1>Body type: STRAT</h1>} */}
            <h2>Left or Right handed: {props.hand}</h2>
            <h3>Paint color: {props.paint}</h3>
            <h4>Hardware: {props.hardware && 'true'}</h4>
        </div>
        
    );
}

export default Guitar;