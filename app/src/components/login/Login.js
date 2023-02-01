import React, { Fragment } from 'react';
import './login.scss';

import { Button } from '../button/Button';
import { Input } from '../input/Input';

export const Login = () => {
  return (
    <Fragment>
      <div className="modalForm">
        <Input type="email" label="Email" />
        <Input type="password" label="Пароль" />
      </div>
      <div className="modalBtn">
        <Button text="Войти" />
      </div>
    </Fragment>
  );
};
