import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './Components/Hero';
import Women from './Pages/Women';
import Mens from './Pages/Mens';
import Kids from './Pages/Kids';
import Accessories from './Pages/Accessories';
import Login from "../src/Pages/Login"
import Register from './Pages/Register';

const App = () => {
  return (
    <>
    <Router> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Pages/Mens" element={<Mens />} />
        <Route path="/Pages/Women" element={<Women />} />
        <Route path="/Pages/Kids" element={<Kids />} />
        <Route path="/Pages/Accessories" element={<Accessories />} />
        <Route path="/auth/Login" element={<Login />} />
        <Route path='/auth/Register' element={<Register />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
