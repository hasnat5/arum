// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Aktor from './components/Aktor';
import About from "./components/About";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Routes className="App">
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aktor' element={<Aktor></Aktor>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
