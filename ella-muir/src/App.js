import './App.css';
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
