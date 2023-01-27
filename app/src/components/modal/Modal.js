import React, { Fragment } from 'react';
import './modal.scss';
import { Login } from '../login/Login';
import { Register } from '../register/Register';

export const Modal = () => {
  return (
    <div className="modal">
      <Fragment>
        <div className="modalHead">
          <ul>
            <li>Вход</li>
            <li>Регистрация</li>
          </ul>

          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <hr />
      </Fragment>
      {/* <Login /> */}
      <Register />
    </div>
  );
};
