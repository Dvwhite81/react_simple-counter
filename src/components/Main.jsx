import { useState } from 'react';
import Counter from './Counter';
import './Main.css';
import Step from './Step';

function Main() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleClick = () => {
    setCount(count + parseInt(step, 10));
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <div className="buttons">
        <Step step={step} setStep={setStep} />
        <Counter handleClick={handleClick} />
      </div>
    </>
  );
}

export default Main;
