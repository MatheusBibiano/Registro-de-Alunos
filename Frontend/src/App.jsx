import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { FormAddStudentPage } from "./pages/FormAddStudentPage";
import { FormEditStudentPage } from "./pages/FormEditStudentPage";
import { ViewStudentPage } from "./pages/ViewStudentPage";
import { NotifierPage } from "./pages/NotifierPage";
import { NotFoundPage } from "./pages/NotFoundPage";

import "./App.css";

export function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registro" element={<RegisterPage />} />
          <Route path="/novo-aluno" element={<FormAddStudentPage />} />
          <Route path="/editar-aluno" element={<FormEditStudentPage />} />
          <Route path="/visualizar-aluno" element={<ViewStudentPage />} />
          <Route path="/notificacao" element={<NotifierPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}
