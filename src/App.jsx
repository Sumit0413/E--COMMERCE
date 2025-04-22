import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './Components/Hero';
import Women from './Pages/Women';
import Mens from './Pages/Mens';

const App = () => {
  return (
    <>
    <Router> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Pages/Mens" element={<Mens />} />
        <Route path="/Pages/Women" element={<Women />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
