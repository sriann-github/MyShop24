import './App.css';
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import Header from './components/Header'
import React from 'react'
import HomeScreen from './Screens/HomeScreen';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductScreen from './Screens/ProductScreen'


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
            </Routes>            
          </Container>
        </main>
        <Footer></Footer>      
      </Router>
    </>
  );
}

export default App;
