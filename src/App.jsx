import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import User from "./components/User";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import Settings from './components/Settings'
import Profil from './components/Profil'
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id"  element={<User/>}/>
          <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='profile' element={<Profil/>}/>
          <Route path='settings' element={<Settings/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
