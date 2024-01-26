import React from 'react'
import Sildebar from './components/Sildebar';
import Content from './components/Content';
import Profile from './components/Profile';
import { Routes, Route, useLocation } from 'react-router-dom';
import Vente from './components/Vente';


import './App.css';
import Annonce from './components/Annonce';
import Incategorie from './components/Incategorie';
import Itype from './components/Itype';
import Inmodele from './components/Inmodele';
import Icatmarque from './components/Icatmarque';
import Ienrgie from './components/Ienrgie';
import Inev from './components/Inev';
import { Intranmision } from './components/Intranmision';
import Statistique from './components/Home';
import Parametrage from './components/Parametrage';
import Home from './components/Home';
import Login from './components/Login';
import CarteVoiture from './components/CarteVoiture';

const App = () => {

  const location = useLocation();

  const loginPage = window.location.pathname === '/';
  return (
    <>
      {location.pathname == '/' ? 
        <></> :
        <>
          <Sildebar />
          <Content />
        </>
      }
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Vente" element={<Vente />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Annonce" element={<Annonce />}></Route>
        <Route path="/categorie" element={<Incategorie />}></Route>
        <Route path="/type" element={<Itype />}></Route>
        <Route path="/transmition" element={<Intranmision />}></Route>
        {/* <Route path="/carte" element={<CarteVoiture />}></Route> */}
        <Route path="/modele" element={<Inmodele />}></Route>
        <Route path="/marquecat" element={<Icatmarque />}></Route>
        <Route path="/pays" element={<Incategorie />}></Route>
        <Route path="/Energie" element={<Ienrgie />}></Route>
        <Route path="/etatvehicule" element={<Inev />}></Route>
        <Route path="/Parametrage" element={<Parametrage />}></Route>

      </Routes>
    </>
  );
};

export default App