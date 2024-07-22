import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      { icon: "home", path: "/pagina-inicial", label: "Página Inicial" },
      { icon: "star", path: "/cidades", label: "Cidades" }
    ]);    
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={ <Button variant="contained" color="primary" onClick={ toggleDrawerOpen }>Botão</Button> } />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};