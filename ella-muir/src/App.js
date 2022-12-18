import './App.css';
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/experience" element={<Experience/>}/>
      </Routes>
    </div>
  );
}

export default App;
