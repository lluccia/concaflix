import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'

function App() {
  return (
    <nav className="Menu">
    <a href="/">
      <img className="Logo" src={Logo} alt="ConcaFlix logo" />
    </a>

    <Button as="a" className="ButtonLink" href="/">
      Novo vídeo
    </Button>
  </nav>
  );
}

export default App;
