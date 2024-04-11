import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div className="App">
      <Navbar />
            <Header />
            <About />
            
    </div>
  );
}


export default App;
