import './App.css';
import videogame from './videogame.png';
import { useState } from 'react';

function App() {
  const [numero, setNumero] = useState(0);

  function aumentarNumero() {
    setNumero(numero + 1);
  }

  function diminuirNumero() {
    setNumero(numero - 1);
  }

  return (
    <div className="App">
      <h1>Projeto final - Ajudando Gamers</h1>
      <img src={videogame} alt="imagem" />

      <p className='p'>Nosso projeto tem como base ajudar os jogadores de diversos jogos. Através de dicas, tutoriais, explicações e truques, será possível facilitar muito a vida de um jogador que está iniciando uma nova jornada em seu game novo!!!</p>
      <hr />

      <div>
        <button onClick={diminuirNumero}>Fase anterior</button>
        <p className='fase'>Fase: {numero}</p>
        <button onClick={aumentarNumero}>Próxima fase</button>
      </div>
    </div>
  );
}

export default App;
