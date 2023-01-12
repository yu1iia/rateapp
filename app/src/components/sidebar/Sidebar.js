import React, { useContext } from 'react';
import { RateContext } from '../../context/RateContext';
import './sideBar.scss';

export const Sidebar = () => {
  const { state } = useContext(RateContext);

  return (
    <div className="sidebar">
      <div className="sidebarHead">
        <h3>Все валюты</h3>
      </div>
      <div className="sidebarContent">
        <ul>
          {Object.keys(state.currency).map((item, i) => {
            return (
              <li key={item}>
                <p>
                  <span>
                    <img src={state.currency[item].flag} alt={item} />
                    &nbsp;{item}
                  </span>
                  &nbsp; {state.currency[item].name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
