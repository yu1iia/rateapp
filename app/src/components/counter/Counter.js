import React, { useContext } from 'react';
import { RateContext } from '../../context/RateContext';
import './counter.scss';

export const Counter = () => {
  const {
    state,
    inputValueHandler,
    calculatorHandler,
    currencyValueHandler,
  } = useContext(RateContext);

  return (
    <div className="calcHead">
      <div>
        <h4>Я хочу обменять: </h4>
      </div>
      <div className="operation">
        <span>
          <input
            type="number"
            value={state.inputValue}
            onChange={inputValueHandler}
          />
          &nbsp; USD
        </span>
        <select onChange={currencyValueHandler}>
          {Object.keys(state.currency).map((item, i) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
        <button
          onClick={() => {
            calculatorHandler(state.currencyValue);
          }}
        >
          Посчитать
        </button>
      </div>
    </div>
  );
};
