import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useDrawerContext } from "../shared/contexts";
import { Dashboard, ListagemDePessoas, DetalheDePessoas, ListagemDeCidades, DetalheDeCidades } from "../pages";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      { icon: "home", path: "/pagina-inicial", label: "Página Inicial" },
      { icon: "people", path: "/pessoas", label: "Pessoas" },
      { icon: "city", path: "/cidades", label: "Cidades" }
    ]);    
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/pessoas" element={ <ListagemDePessoas />} />
      <Route path="/pessoas/detalhe/:id" element={ <DetalheDePessoas />} />
      <Route path="/cidades" element={<ListagemDeCidades />} />
      <Route path="/cidades/detalhe/:id" element={<DetalheDeCidades />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};