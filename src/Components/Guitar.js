import React from 'react';
import './Guitar.css';
import {LeftyStrat} from './LeftyStrat';
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
            {leftyStrat && <LeftyStrat />}
            <h2>Left or Right handed: {props.hand}</h2>
            <h3>Paint color: {props.paint}</h3>
            <h4>Hardware: {props.hardware && 'true'}</h4>
        </div>
        
    );
}

export default Guitar;