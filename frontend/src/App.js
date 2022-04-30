import './App.css';
import Header from './component/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import AskDoctor from './pages/AskDoctor/AskDoctor.js';
import Covid from './pages/Covid/Covid.js';
import Ayurveda from './pages/Ayurveda/Ayurveda.js';
import Subscriptions from './pages/Subscriptions/Subscriptions.js';
import Offers from './pages/Offers/Offers.js';
import Cart from './pages/Cart/Cart.js';
 
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/online-doctor-consultation' element={<AskDoctor/>}/>
        <Route path='/coronavirus-covid19' element={<Covid/>}/>
        <Route path='/ayurveda' element={<Ayurveda/>}/>
        <Route path='/subscriptions' element={<Subscriptions/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
