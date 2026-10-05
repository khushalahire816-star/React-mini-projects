import styles from './App.module.css'
import Display from './Components/Display'
import ButtonsContainer from './Components/ButtonsContainer'
import { useState } from 'react';

function App() {
  let [calVal, setCalVal] = useState([""]);
  const onClickButton = (buttonText) => {
    if(buttonText === 'C'){
      setCalVal("");
    }else if(buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);
    }else{
      let newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className= {styles.calculator}>
    <Display displayVal = {calVal}></Display>
    <ButtonsContainer onClickButton = {onClickButton} ></ButtonsContainer>
  </div>
  );
};

export default App
