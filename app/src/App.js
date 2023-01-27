import React from 'react';
import './App.scss';
import Layout from './components/layout/Layout';
import { Dark } from './components/dark/Dark';
import { Modal } from './components/modal/Modal';

import { RateContext } from './context/RateContext';

import axios from 'axios';

import CHF from './image/CHF.png';
import CNY from './image/CNY.png';
import EUR from './image/EUR.png';
import GBP from './image/GBP.png';
import JPY from './image/JPY.png';
import RUB from './image/RUB.png';
import USD from './image/USD.png';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      base: 'USD',
      rate: '',
      date: '',
      currency: {
        USD: {
          name: 'Доллар США',
          flag: USD,
          course: '',
        },
        CNY: {
          name: 'Китайский Юань',
          flag: CNY,
          course: '',
        },
        EUR: {
          name: 'Евро',
          flag: EUR,
          course: '',
        },
        GBP: {
          name: 'Фунт Стерлингов',
          flag: GBP,
          course: '',
        },
        JPY: {
          name: 'Японская Йена',
          flag: JPY,
          course: '',
        },
        RUB: {
          name: 'Российский рубль',
          flag: RUB,
          course: '',
        },
        CHF: {
          name: 'Швейцарский франк',
          flag: CHF,
          course: '',
        },
      },
      //calculator
      inputValue: 100,
      currencyValue: 'USD',
      result: null,

      //sample

      sample: { base: 'USD', base2: 'EUR', date: '', course: '' },
      sampleList: '',
    };
  }

  //методы для калькулятора

  inputValueHandler = event => {
    this.setState({
      inputValue: event.target.value,
      result: null,
    });
  };

  currencyValueHandler = event => {
    this.setState({
      currencyValue: event.target.value,
      result: null,
    });
  };

  calculatorHandler = async value => {
    let result;
    await fetch(`https://api.exchangerate.host/latest?base=USD`)
      .then(response => response.json())
      .then(response => {
        result = response.rates[value] * this.state.inputValue;
      });
    this.setState({ result });
  };

  //методы для выборки

  baseHandler = event => {
    this.setState({
      sample: { ...this.state.sample, base: event.target.value },
    });
  };
  base2Handler = event => {
    this.setState({
      sample: { ...this.state.sample, base2: event.target.value },
    });
  };

  sampleDateHandler = event => {
    this.setState({
      sample: { ...this.state.sample, date: event.target.value },
    });
  };

  dataWrite = async () => {
    await fetch(
      `https://api.exchangerate.host/${this.state.sample.date}?base=${this.state.sample.base}`,
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          sample: {
            ...this.state.sample,
            course: response.rates[this.state.sample.base2],
          },
        });
      });

    await axios
      .post(
        'https://rateapp-58a6e-default-rtdb.europe-west1.firebasedatabase.app/sample.json',
        this.state.sample,
      )
      .then(response => {
        return '';
      });

    await axios(
      'https://rateapp-58a6e-default-rtdb.europe-west1.firebasedatabase.app/sample.json',
    ).then(response => {
      this.setState({ sampleList: response.data });
    });
  };

  sampleRemove = async id => {
    let sampleList = { ...this.state.sampleList };
    delete sampleList[id];
    this.setState({ sampleList });

    await axios.delete(
      `https://rateapp-58a6e-default-rtdb.europe-west1.firebasedatabase.app/sample/${id}.json`,
    );
  };

  componentDidMount() {
    fetch(`https://api.exchangerate.host/latest?base=${this.state.base}`)
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        const rateArr = ['USD', 'CNY', 'EUR', 'GBP', 'JPY', 'RUB', 'CHF'];
        const currency = { ...this.state.currency };

        for (let i = 0; i < rateArr.length; i += 1) {
          currency[rateArr[i]].course = response.rates[rateArr[i]];
        }
        this.setState({
          rate: response.rates,
          date: response.date,
          currency,
        });
      });

    axios(
      'https://rateapp-58a6e-default-rtdb.europe-west1.firebasedatabase.app/sample.json',
    ).then(response => {
      this.setState({ sampleList: response.data });
    });
  }

  render() {
    return (
      <RateContext.Provider
        value={{
          state: this.state,
          inputValueHandler: this.inputValueHandler,
          currencyValueHandler: this.currencyValueHandler,
          calculatorHandler: this.calculatorHandler,
          baseHandler: this.baseHandler,
          base2Handler: this.base2Handler,
          sampleDateHandler: this.sampleDateHandler,
          dataWrite: this.dataWrite,
          sampleRemove: this.sampleRemove,
        }}
      >
        <Dark />
        <Modal />
        <Layout />
      </RateContext.Provider>
    );
  }
}

export default App;
