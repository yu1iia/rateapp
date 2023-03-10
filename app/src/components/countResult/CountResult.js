import React, { useContext } from 'react';
import { RateContext } from '../../context/RateContext';
import './countResult.scss';

export const CountResult = () => {
  const { state } = useContext(RateContext);

  return (
    <div className="calcResult">
      <ul>
        {state.result ? (
          <li>
            <p>
              <span>{state.inputValue}&nbsp;USD</span>=
              <span>
                {state.result}&nbsp;
                {state.currencyValue}
              </span>
            </p>
          </li>
        ) : null}
      </ul>
    </div>
  );
};
