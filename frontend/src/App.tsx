import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
import CataloguePage from './pages/CataloguePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/about' element={<AboutUsPage />}/>
        <Route path='/catalogue/:type' element={<CataloguePage />}/>
        <Route path='/catalogue/:type/:product' element={<ProductPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
