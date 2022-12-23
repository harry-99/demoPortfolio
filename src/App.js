import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from "react-router-dom"
import Home from './components/home/Home';
import Project from './components/Project/Project';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
