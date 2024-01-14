import './App.css';
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import Header from './components/Header'
import React from 'react'
import HomeScreen from './Screens/HomeScreen';


const App = () => {
  return (
    <>
    <Header></Header>
    <main>
      <Container>
        <h1>
          <HomeScreen />
        </h1>
      </Container>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
