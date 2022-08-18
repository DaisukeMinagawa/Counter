import React, { useState } from 'react'
const INITIAL_NUMBER = 0;

const CounterName = (props) => {
    return (
        <p>
            <b>{props.name}</b>カウント数: {props.number}
        </p>);
};

const Counter = (props) => {
    const [number, setNumber] = useState(INITIAL_NUMBER);
    const onClickPlus = () => { setNumber((prevCount) => prevCount + 1) };
    const onClickMinus = () => { setNumber((prevCount) => prevCount - 1) };
    const onClickReset = () => { setNumber(INITIAL_NUMBER) };

    return (
        <div>
            <CounterName number={number} name={props.name} />
            <p>{number}</p>
            <button type='button' onClick={onClickPlus}>+</button>
            <button type='button' onClick={onClickMinus}>-</button>
            <button type='button' onClick={onClickReset}>Reset</button>
        </div>
    )
}

export default Counter