import './App.css';
import ChooseMode from './components/ChooseMode';
import { useState, useEffect } from 'react';
import DecInput from './components/Dec';
import Output from './components/OutputDigit';


const App = () => {

  const [chosenMode, setMode] = useState('OCT');
  const [text, setText] = useState('');

  useEffect(() => {
    console.log("use effect ", chosenMode);
  }, chosenMode);

  return (
    <div className="App">
      <ChooseMode setMode={setMode} />
      <DecInput text={text} setText={setText} />
      <Output chosenMode={chosenMode} text={text} />
    </div>
  )
};

export default App;
