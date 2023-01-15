import React from 'react';
import './App.scss';
import Layout from './components/layout/Layout';
import { RateContext } from './context/RateContext';

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
    };
  }

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
  }

  render() {
    return (
      <RateContext.Provider value={{ state: this.state }}>
        <Layout />
      </RateContext.Provider>
    );
  }
}

export default App;
