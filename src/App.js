import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import RegistrationPage from './pages/RegistrationPage';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import LoginPage from './pages/LoginPage';

// import 'antd/dist/antd.css';
import { Layout } from 'antd';
import ProductDetail from './components/ProductDetail';
import MainLayout from './layouts/MainLayout';
import ProductItem from './components/ProductItem';
import CartPage from './pages/CartPage';

const { Content } = Layout;

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product/:id" element={<MainLayout />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
