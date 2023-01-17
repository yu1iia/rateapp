import React, { useContext } from 'react';

import { RateContext } from '../../context/RateContext';
import { Button } from '../../components/button/Button';

import './sample.scss';

export const Sample = () => {
  const { state } = useContext(RateContext);

  return (
    <div className="sample">
      <div className="sampleContainer">
        <div>
          <h3>
            Получить курс: &nbsp;
            <select>
              {Object.keys(state.currency).map((item, index) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
            &nbsp; &nbsp; к &nbsp;&nbsp;
            <select>
              {Object.keys(state.currency).map((item, index) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
          </h3>
        </div>
        <div className="sampleHead">
          <span>
            Дата
            <input type="date" />
          </span>
          <Button text="Получить курс" />
        </div>
        <div className="sampleResult">
          <ul></ul>
        </div>
      </div>
    </div>
  );
};
