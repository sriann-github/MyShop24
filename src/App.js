import './App.css';
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import Header from './components/Header'
import React from 'react'
import HomeScreen from './Screens/HomeScreen';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'
import LoginScreen from './Screens/LoginScreen'
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';



const App = () => {
  return (
    <>
      <Router>
        <Header></Header>
        <main>
          <Container>
            <Routes>
              <Route path="/" exact element={<HomeScreen />} />
              <Route path="/product/:id" exact element={<ProductScreen />} />
              <Route path="/cart" exact element={<CartScreen />} />
              <Route path="cart/:id" exact element={<CartScreen />} />
              <Route path="/login" exact element={<LoginScreen />}></Route>
              <Route path="/shipping" exact element={<ShippingScreen />}></Route>
              <Route path="/payment" exact element={<PaymentScreen />}></Route>
            </Routes>            
          </Container>
        </main>
        <Footer></Footer>      
      </Router>
    </>
  );
}

export default App;
