import React from 'react';
import './Guitar.css';
import {LeftyStrat} from './LeftyStrat';
import {RightyStrat} from './RightyStrat';
import {LeftyLesPaul} from './LeftyLesPaul';
import {RightyLesPaul} from './RightyLesPaul';
const Guitar = (props) => {
    // https://react-cn.github.io/react/tips/if-else-in-JSX.html
    const body = props.body;
    const hand = props.hand;

    const leftyStrat = (body === 'strat' && hand === 'left');
    const rightyStrat = (body === 'strat' && hand === 'right');
    const leftyLesPaul = (body === 'les-paul' && hand === 'left');
    const rightyLesPaul = (body === 'les-paul' && hand === 'right');

    return (
        <div className='guitar-component'>
            {leftyStrat && <LeftyStrat {...props} />}
            {rightyStrat && <RightyStrat />}
            {leftyLesPaul && <LeftyLesPaul />}
            {rightyLesPaul && <RightyLesPaul />}
            <h2>Left or Right handed: {props.hand}</h2>
            <h3>Paint color: {props.paint}</h3>
            <h4>Hardware: {props.hardware && 'true'}</h4>
        </div>
        
    );
}

export default Guitar;