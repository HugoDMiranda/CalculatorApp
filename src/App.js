import './App.css';
import Pantalla from './components/Pantalla';
import React from 'react';
import { evaluate } from 'mathjs';
import Button from './components/Boton';
import BotonClear from './components/BotonClear';
import { useState } from 'react';


function App() {

  const [input, setInput] = useState('0');

  const addedInput = val => {
  
    setInput(input + val)
    
  };

  const clear = () => {
    setInput('');
  };

  const result = () => {
    if(input) {
      setInput(evaluate(input));
    }  else {
      alert('Porfavor ingrese valores para realizar los calculos')
    }
   
  };

  return (
    <div className="App">
      <div className='calculator-con'>
        <Pantalla input={input} />
        <div className='row'>
          <Button clic={addedInput} value='1'/>
          <Button clic={addedInput} value='2'/>
          <Button clic={addedInput} value='3'/>
          <Button clic={addedInput} value='+'/>
        </div>
        <div className='row'>
          <Button clic={addedInput} value='4'/>
          <Button clic={addedInput} value='5'/>
          <Button clic={addedInput} value='6'/>
          <Button clic={addedInput} value='-'/>
        </div>
        <div className='row'>
          <Button clic={addedInput} value='7'/>
          <Button clic={addedInput} value='8'/>
          <Button clic={addedInput} value='9'/>
          <Button clic={addedInput} value='*'/>
        </div>
        <div className='row'>
          <Button clic={result} value='='/>
          <Button clic={addedInput} value='0'/>
          <Button clic={addedInput} value='.'/>
          <Button clic={addedInput} value='/'/>
        </div>
        <div className='row'>
          <BotonClear clear= {clear} value='CLEAR'/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
