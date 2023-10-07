import './App.css';
import axios from 'axios';

function App() {

  axios.get('https://teste-vercel-alpha-three.vercel.app/', null)
    .then(res => {
      console.log(res)
    })

    .catch(error => {
      console.log(error)
    })

  return (
    <div className="App">
      <p>{ }</p>
    </div>
  );
}

export default App;
