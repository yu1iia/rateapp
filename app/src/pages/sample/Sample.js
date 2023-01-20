import React, { useContext } from 'react';

import { RateContext } from '../../context/RateContext';
import { Button } from '../../components/button/Button';

import './sample.scss';

export const Sample = () => {
  const {
    state,
    baseHandler,
    base2Handler,
    sampleDateHandler,
    dataWrite,
  } = useContext(RateContext);

  return (
    <div className="sample">
      <div className="sampleContainer">
        <div>
          <h3>
            Получить курс: &nbsp;
            <select onChange={baseHandler} value={state.sample.base}>
              {Object.keys(state.currency).map((item, index) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
            &nbsp; &nbsp; к &nbsp;&nbsp;
            <select onChange={base2Handler} value={state.sample.base2}>
              {Object.keys(state.currency).map((item, index) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
          </h3>
        </div>
        <div className="sampleHead">
          <span>
            Дата
            <input type="date" onChange={sampleDateHandler} />
          </span>
          <Button text="Получить курс" click={dataWrite} arg={state.sample} />
        </div>
        <div className="sampleResult">
          <ul></ul>
        </div>
      </div>
    </div>
  );
};
