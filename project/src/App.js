import './App.scss';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MensWatches from './components/MensWatches'
import Brands from './components/Brands'
import SignIn from './components/Sign In';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Brands" element={<Brands />} />
      <Route path="/MensWatches" element={<MensWatches />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}

export default App;