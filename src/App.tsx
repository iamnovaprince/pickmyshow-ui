import './App.css';
import { Route, redirect, BrowserRouter, Routes } from 'react-router-dom';
import AuthPage from './page/AuthPage';
import HomePage from './page/HomePage';
import MoviePage from './page/MoviePage';
import AdminPanel from './page/AdminPanel';
import TheatreadminPanel from './page/TheatreadminPanel';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={ <AuthPage />} />

        <Route  path="/theatre/login" element={ <AuthPage />} />
        <Route path="/theatreadminpanel/" element={< TheatreadminPanel /> } />
        <Route  path="/admin/login" element={ <AuthPage />} />
        <Route path="/adminpanel/" element={< AdminPanel /> } />
        <Route  path="/home" element={ <HomePage />} />
        <Route path="/moviepage" element={<MoviePage/>} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
