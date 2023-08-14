import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePG from './pages/home';
import UsuariosPG from './pages/usuarios';
import CarrosPG from './pages/carros';
import SorveteriaPG from './pages/sorveteria';
import InstagramPG from './pages/instagram';
import FilmePG from './pages/filmes';
import NetflixPG from './pages/netflix';
import MarvelPG from './pages/marvel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePG />}/>
        <Route path='/usuarios' element={<UsuariosPG />}/>
        <Route path='/carros' element={<CarrosPG />}/>
        <Route path='/sorveteria' element={<SorveteriaPG />}/>
        <Route path='/Instagram' element={<InstagramPG />}/>
        <Route path='/filmes' element={<FilmePG />}/>
        <Route path='/netFlix' element={<NetflixPG />}/>
        <Route path='/marvel' element={<MarvelPG />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

