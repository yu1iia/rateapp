import React, { Fragment } from 'react';
import './register.scss';

import { Button } from '../button/Button';

export const Register = () => {
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
        <Button text="Зарегистрироваться" />
      </div>
    </Fragment>
  );
};
