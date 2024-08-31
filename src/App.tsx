import './App.css';
import { Route, redirect, BrowserRouter, Routes } from 'react-router-dom';
import AuthPage from './page/AuthPage';
import HomePage from './page/HomePage';
import MoviePage from './page/MoviePage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/user/login" element={ <AuthPage />} />
        <Route  path="/admin/login" element={ <AuthPage />} />
        <Route  path="/theatre/login" element={ <AuthPage />} />
        <Route path="/user/signup" element={< AuthPage /> } />
        <Route path="/admin/signup" element={< AuthPage /> } />
        <Route path="/admin/signup" element={< AuthPage /> } />
        <Route  path="/home" element={ <HomePage />} />
        <Route path="/moviepage" element={<MoviePage/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
