import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About from './Routes/About';
//Routes, route
//links

//UseNavigation hook

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<About/>} />
  </Routes>
  );
}

export default App;
