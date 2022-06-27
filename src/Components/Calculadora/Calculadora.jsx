import React, {useState} from 'react';
import './styles.css';

function Calculadora() {
    const[calc,setCalc] = useState("");
    const[resultado, setResultado] = useState("");
    const operadores = ['/', '-', '+', '=', '.', '*'];
  
    const updateCalc = value => {
      //Para que não possamos colocar dois operadores seguidos
      if (
          (operadores.includes(value) && calc === '') || //não podemos colocar um operador sem ter número
          (operadores.includes(value) && operadores.includes(calc.slice(-1))) //não podemos colocar um operador depois do outro
          ) {
        return;
      }
        
  
          setCalc(calc + value);
  
        if (!operadores.includes(value)) {
          setResultado(eval(calc + value).toString()); //Pesquisar eval
        }
    }
  
    const criarDigitos = () => {
      const digitos = [];
       
      for ( let i = 1; i < 10; i++){
        digitos.push(
          <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
        )
      }
  
      return digitos
    }
  
    const calcular = () => {
      setCalc(eval(calc).toString());
    }
  
    const deletarDigito = () => {
      if (calc === '') {
        return;
      }
      const value = calc.slice(0,-1); //Vai excluir o último digito
      setCalc(value);
    }
  return (
    <div className='Container'>
        <div className='Calculadora'>

        <div className='display'>
        {resultado ? <span>({resultado})</span> : ''}  {calc || "0"}
        </div>

        <div className='botoes'>

        <div className='Digitos'>
        <button className='deletar' onClick={deletarDigito}>DEL</button>
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={() => updateCalc('0')}>0</button>
            {criarDigitos()}
            
        </div>

        <div className='operadores'>
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('-')}>-</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={calcular}>=</button>
        </div>

        </div>

        </div>
    </div>
  )
}

export default Calculadora