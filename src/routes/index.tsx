import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { Dashboard, ListagemDeCidades } from "../pages";
import { useEffect } from "react";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      { icon: "home", path: "/pagina-inicial", label: "Página Inicial" },
      { icon: "city", path: "/cidades", label: "Cidades" }
    ]);    
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/cidades" element={ <ListagemDeCidades />} />
      {/* <Route path="/cidades/detalhe/:id" element={ <ListagemDeCidades />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};