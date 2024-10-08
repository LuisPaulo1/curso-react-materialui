
import { Avatar, Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { useAppThemeContext, useAuthContext, useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { DarkModeSharp, LocationCitySharp, LogoutSharp, PeopleAltSharp } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';

const iconMapping: any = {
  home: HomeIcon,
  people: PeopleAltSharp,
  city: LocationCitySharp
};
interface IListItemLinkProps {
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
}
const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {

  const navigate = useNavigate();
  const resolvePath = useResolvedPath(to);
  const match = useMatch({ path: resolvePath.pathname, end: false });
  const IconComponent = iconMapping[icon] || HomeIcon;

  const handleClick = () => {
    navigate(to);
    onClick?.();
  }

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <IconComponent />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}

export const MenuLateral: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();
  const { logout } = useAuthContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar
              sx={{ width: theme.spacing(12), height: theme.spacing(12) }}
              src=""
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map(drawerOption => (
                <ListItemLink
                  key={drawerOption.path}
                  to={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <DarkModeSharp />
                </ListItemIcon>
                <ListItemText primary="Alternar tema" />
              </ListItemButton>
              <ListItemButton onClick={logout}>
                <ListItemIcon>
                  <LogoutSharp />
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}