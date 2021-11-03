import Web3 from 'web3';
import react from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (

  <form className="mb-3">
      <div className="main">
        <Navbar/>
        <Main/>
      </div>
      
  </form>

  );
}

export default App;
