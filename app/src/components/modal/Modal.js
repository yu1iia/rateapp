import React, { Fragment, useState, useContext } from 'react';
import './modal.scss';
import { Login } from '../login/Login';
import { Register } from '../register/Register';
import { RateContext } from '../../context/RateContext';

export const Modal = () => {
  const { state, modalHideHandler } = useContext(RateContext);
  const [value, setValue] = useState('login');

  const links = [
    { name: 'Вход', id: 'login' },
    { name: 'Регистрация', id: 'register' },
  ];

  const cls = ['modal'];

  const windowHandler = id => {
    setValue(id);
  };

  if (state.showModal) {
    cls.push('modalShow');
  }
  return (
    <div className={cls.join(' ')}>
      <Fragment>
        <div className="modalHead">
          <ul>
            {links.map((item, i) => {
              return (
                <li
                  style={{
                    fontWeight: item.id === value ? 'bold' : 'normal',
                    cursor: 'pointer',
                  }}
                  key={item.name}
                  onClick={() => {
                    windowHandler(item.id);
                  }}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>

          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={modalHideHandler}
          ></i>
        </div>
        <hr />
      </Fragment>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'red' }}>{state.error}</h2>
      </div>
      {value === 'register' ? <Register /> : <Login />}
    </div>
  );
};
