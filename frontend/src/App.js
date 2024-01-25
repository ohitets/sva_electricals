import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {
  return (
      <div className="App">
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </div>
  );
}

export default App;
