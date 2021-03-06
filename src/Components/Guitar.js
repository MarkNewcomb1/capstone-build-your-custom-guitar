import React from 'react';
import './Guitar.css';
import {LeftyStrat} from './LeftyStrat';
import {RightyStrat} from './RightyStrat';
import {LeftyLesPaul} from './LeftyLesPaul';
import {RightyLesPaul} from './RightyLesPaul';
import {MetallicTeal} from './MetallicTeal';
import {MetallicBlue} from './MetallicBlue';
import {MetallicBurntOrange} from './MetallicBurntOrange';
import {MetallicGold} from './MetallicGold';
import {MetallicGray} from './MetallicGray';
import {MetallicPurple} from './MetallicPurple';
import {Clear} from './Clear';
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
        <MetallicTeal />
        <MetallicBlue />
        <MetallicBurntOrange />
        <MetallicGold />
        <MetallicGray />
        <MetallicPurple />
        <Clear />
            {leftyStrat && <LeftyStrat {...props} />}
            {rightyStrat && <RightyStrat {...props} />}
            {leftyLesPaul && <LeftyLesPaul {...props} />}
            {rightyLesPaul && <RightyLesPaul {...props} />}
        </div>
        
    );
}

export default Guitar;