import logo from './logo.svg';
import './App.css';
import Modawana from './pages/blog';
import Milaf from './pages/profile';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>مرحبا بكم في تطبيق رياكت</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/milaf'} className="nav-link"> الملف الشخصي </Link></li>
            <li><Link to={'/modawana'} className="nav-link"> تدوينات</Link></li>
          </ul>
        </nav>
        <hr />
      </div>
      <Routes>
        <Route path="/"> 
            <Route path="milaf" element={<Milaf />} />
            <Route path="modawana" element={<Modawana />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
