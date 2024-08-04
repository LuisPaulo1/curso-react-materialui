import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { Dashboard, ListagemDePessoas } from "../pages";
import { useEffect } from "react";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      { icon: "home", path: "/pagina-inicial", label: "Página Inicial" },
      { icon: "people", path: "/pessoas", label: "Pessoas" }
    ]);    
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/pessoas" element={ <ListagemDePessoas />} />      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};