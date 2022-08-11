import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './content/MainPage';
import MapPage from './content/MapPage';
import ContactPage from './content/ContactPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='map' element={<MapPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
