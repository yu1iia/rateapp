import React from 'react';
import { Counter } from '../../components/counter/Counter';
import { CountResult } from '../../components/countResult/CountResult';

import './calc.scss';

export const Calc = () => {
  return (
    <div className="calculator">
      <div className="calcContainer">
        <Counter />
        <CountResult />
      </div>
    </div>
  );
};
