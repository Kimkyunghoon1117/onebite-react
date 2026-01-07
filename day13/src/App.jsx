import './App.css'
import CurrenyInput from './components/CurrenyInput'
import { useState } from 'react';

const EXCHANGE_RATE = 1300;

function App() {
const [v1, setV1] = useState(0);
const [v2, setV2] = useState(0);

const onChange1= (v)=> {
  setV1(v);
  setV2(v/EXCHANGE_RATE);
};

const onChange2= (v)=> {
  setV1(v*EXCHANGE_RATE);
  setV2(v);
};

  return (
    <>
      <h1> 환율 변환기 (KRW_USD)</h1>
      <CurrenyInput text={'krw'} v={v1} onChange={onChange1}/>
      <CurrenyInput text={'usd'} v={v2} onChange={onChange2}/>
    </>
  )
}

export default App
