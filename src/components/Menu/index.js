import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './Menu.css';

function App() {
  return (
    <nav className="Menu">
    <Link to="/">
      <img className="Logo" src={Logo} alt="ConcaFlix logo" />
    </Link>

    <Button as={Link} className="ButtonLink" to="/cadastro/video">
      Novo vídeo
    </Button>
  </nav>
  );
}

export default App;
