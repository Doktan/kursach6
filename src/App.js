import './App.css';
import ChooseMode from './components/ChooseMode';
import { useState, useEffect, useRef } from 'react';
import DecInput from './components/Dec';
import Output from './components/OutputDigit';
import { convertNum } from './functions/fs';
import ErrorHandler from './components/ErrorHandler';


const App = () => {

  const [chosenMode, setMode] = useState('OCT');
  const [text, setText] = useState('');
  const [isError, showError] = useState(false);

  return (
    <div className="App">
      <ChooseMode setMode={setMode} />
      <DecInput text={text}  setText={setText} showError={showError} />
      <Output chosenMode={chosenMode} text={convertNum(text, chosenMode)} />
      {isError ? <ErrorHandler/> : null}
    </div>
  )
};

export default App;
