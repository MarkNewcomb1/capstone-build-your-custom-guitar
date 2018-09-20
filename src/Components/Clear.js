import React from 'react';
function Clear() {
    return (
        <svg className='pattern' xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
        <pattern id='clear' width="1" height="1" viewBox="0 377 1776 1776">
            <image href={require('../img/clear.jpg')} width="2000" height="3000" preserveAspectRatio="none"></image>
        </pattern>
            </defs>
        </svg>
    );

}

export{Clear};