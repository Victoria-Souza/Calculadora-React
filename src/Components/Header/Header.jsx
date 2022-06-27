import React from 'react';
import logo from '../../Assets/logo_fundo_preto-removebg-preview.png';
import  './Styles.css';

function Header() {
  return (
    <div>
        <div className='Head'>
            <img src={logo} alt='logo' height={130} />
            <h1>Calculadora</h1>
        </div>
    </div>

  )
}

export default Header