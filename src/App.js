import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Login } from './Components/Login';

function App() {
  return (
      <Routes>
        <Route path='/Login' element={<Login />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    );
}

export default App;
