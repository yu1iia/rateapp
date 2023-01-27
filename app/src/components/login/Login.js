import React, { Fragment } from 'react';
import './login.scss';

import { Button } from '../button/Button';

export const Login = () => {
  return (
    <Fragment>
      <div className="modalForm">
        <div className="modalInput">
          <span>Войти</span>
          <input type="text" />
        </div>
        <div className="modalInput">
          <span>Войти</span>
          <input type="text" />
        </div>
      </div>
      <div className="modalBtn">
        <Button text="Войти" />
      </div>
    </Fragment>
  );
};
