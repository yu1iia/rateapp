import React, { Fragment, useContext } from 'react';
import './register.scss';

import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { RateContext } from '../../context/RateContext';

export const Register = () => {
  const { renderInputs } = useContext(RateContext);

  return (
    <Fragment>
      <div className="modalForm">{renderInputs()}</div>
      <div className="modalBtn">
        <Button text="Зарегистрироваться" />
      </div>
    </Fragment>
  );
};
