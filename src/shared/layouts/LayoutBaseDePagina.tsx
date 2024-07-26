import { MenuSharp } from "@mui/icons-material";
import { Box, IconButton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePaginator {
  titulo: string;
  children: React.ReactNode;
}
export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginator> = ({ titulo, children }) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const { toggleDrawerOpen } = useDrawerContext();
  const theme = useTheme();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box padding={1} display="flex" alignItems="center" height={theme.spacing(12)} gap={1}>
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <MenuSharp />
          </IconButton>
        )}
        <Typography variant="h5">
          {titulo}
        </Typography>
      </Box>
      <Box>
        Barra de ferramentas
      </Box>
      <Box>
        {children}
      </Box>
    </Box>
  );
}