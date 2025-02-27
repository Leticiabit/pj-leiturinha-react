import React from "react";

import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BaseApp from "./components/BaseApp";
import { ConteudoProfessorLayout } from "./components/conteudo_professor/ConteudoProfessorLayout";
import CriaContaLayout from "./components/cria_conto/CriaContoLayout";
import LeiturinhaMain from "./components/leiturinha/LeiturinhaMain";
import TestComponent from "./components/TestComponent";

import InicioLayout from "./components/inicio/InicioLayout";
import NavigationMain from "./shared/header/NavigationMain";
import SearchMain from "./shared/header/SearchMain";
import Authentication from "./shared/header/Authentication";
import Quizzes from "./pages/Quizzes";
import ConhecaIniciativa from "./pages/ConhecaIniciativa";
import Registrar from "./pages/Registrar";
import Login from "./pages/Login";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";
import HeaderAppLogin from "./shared/HeaderAppLogin";

export default function App() {
  return (
    <>
    
    <Router>
          <HeaderAppLogin></HeaderAppLogin>
    <Routes>
      <Route path="/" element={<InicioLayout/>}></Route>
      <Route path="/leticia"  element={<TestComponent></TestComponent>}></Route>
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/leiturinhas" element={<LeiturinhaMain />} />
      <Route path="/conhecainiciativa" element={<ConhecaIniciativa />} />
      <Route path="/registrar" element={<Registrar />} />
      <Route path="/login" element={<Login />} />

      <Route path="/arearestrita" element={<TestComponent />} />
      
      <Route path="*" element={<PaginaNaoEncontrada />} />

      
      
    </Routes>
    </Router>
    </>
  );
}
