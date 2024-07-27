import { MenuSharp } from "@mui/icons-material";
import { Box, IconButton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext } from "../contexts";
import { ReactNode } from "react";

interface ILayoutBaseDePaginator {
  titulo: string;
  barraDeFerramentas?: ReactNode;
  children: ReactNode;
}
export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginator> = ({ titulo, barraDeFerramentas, children }) => {
  const { toggleDrawerOpen } = useDrawerContext();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box padding={1} display="flex" alignItems="center" gap={1} height={theme.spacing(smDown ? 6 : (mdDown ? 8 : 12))}>
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <MenuSharp />
          </IconButton>
        )}
        <Typography 
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          variant={ smDown ? "h5" : (mdDown ? 'h4' : 'h3')}>
          {titulo}
        </Typography>
      </Box>
      {barraDeFerramentas && (
        <Box>
          {barraDeFerramentas}
        </Box>
      )}
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
}