import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
import CataloguePage from './pages/CataloguePage';
import ProductPage from './pages/ProductPage';
import { Suspense, useEffect } from 'react';
import AdminLogin from './pages/AdminLogin';
import AdminBestSellers from './pages/protected/AdminBestSellers';
import ProtectedRoutes from './ProtectedRoutes';
import AdminProducts from './pages/protected/AdminProducts';
import AdminLeads from './pages/protected/AdminLeads';
import AdminProdDetails from './pages/protected/AdminProdDetails';
import AdminCategories from './pages/protected/AdminCategories';
import AdminCategoryDetails from './pages/protected/AdminCategoryDetails';
import ErrorPage from './pages/ErrorPage';

function App() {

  return (
      <Suspense fallback='...loading'>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/login' element={<AdminLogin />} />
                  <Route path='/contact' element={<ContactPage />} />
                  <Route path='/about' element={<AboutUsPage />} />
                  <Route path='/404' element={<ErrorPage />}/>
                  <Route path='/catalogue/:type' element={<CataloguePage />} />
                  <Route path='/catalogue/:type/:productId' element={<ProductPage />} />
                  <Route element={<ProtectedRoutes />}>
                        <Route path='admin/*'>
                            <Route index element={<AdminBestSellers />} />
                            <Route path=':bestSellers' element={<AdminBestSellers />} />
                            <Route path='leads' element={<AdminLeads />} />
                            <Route path='products' element={<AdminProducts />} />
                            <Route path='categories' element={<AdminCategories />} />
                            <Route path='categories/:categoryId' element={<AdminCategoryDetails />} />
                            <Route path=':products/:prodId' element={<AdminProdDetails  />} />
                            <Route path=':bestSellers/:prodId' element={<AdminProdDetails  />} />
                        </Route>
                  </Route>
              </Routes>
          </BrowserRouter>
      </Suspense>
  );
}

export default App;

