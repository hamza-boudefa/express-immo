import './App.css';

import Home from './pages/Home';
import ListingPage from './pages/ListingPage';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

function App() {
 
  return (
    <div className="App">
<Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Listing" element={<ListingPage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />


      </Routes>


    </div>
  );
}

export default App;
