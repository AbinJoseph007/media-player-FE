import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Landingpage from './pages/Landingpage';
import Watchhist from './pages/Watchhist';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/watchhistory' element={<Watchhist />} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
