import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Favourite from './components/Favourite';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={[<Banner />, <Movies />]} />
          <Route path='/favourites' element={<Favourite />} />
          {/* <Banner /> */}
          {/* <Movies /> */}
          {/* <Favourite /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
