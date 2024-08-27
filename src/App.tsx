import './App.css';
import { Route, redirect, BrowserRouter, Routes } from 'react-router-dom';
import AuthPage from './page/AuthPage';
import HomePage from './page/HomePage';
import SeatSelectionPage from './page/SeatSelectionPage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={ <HomePage />} />
        <Route  path="/user/login" element={ <AuthPage />} />
        <Route  path="/admin/login" element={ <AuthPage />} />
        <Route  path="/theatre/login" element={ <AuthPage />} />
        <Route path="/user/signup" element={< AuthPage /> } />
        <Route path="/admin/signup" element={< AuthPage /> } />
        <Route path="/admin/signupp" element={< AuthPage /> } />
        <Route path="/seat" element={< SeatSelectionPage /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
