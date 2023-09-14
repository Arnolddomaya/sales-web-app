import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom/dist";
import "./styles.js";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Button, Footer } from "./styles.js";
import { FavoritesContext } from "../../../contexts/index.js";

export default function MainTemplate() {
  const { pathname } = useLocation();
  const { favorites } = FavoritesContext.useContext();

  const menu = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/counters",
      label: "Counters",
    },
    {
      to: "/project",
      label: "project",
    },
    {
      to: "/favorites",
      label: "favorites",
    },
  ];

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: "flex",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Sales
            </Typography>

            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {menu.map(({ to, label }) => (
                <Button
                  key={label}
                  component={Link}
                  to={to}
                  current={to === pathname}
                >
                  {label}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton component={Link} sx={{ p: 0 }}>
                <Badge badgeContent={favorites.length} color="error">
                  <Avatar alt="Arnold">AD</Avatar>
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Outlet />
      </main>
      <Footer>
        <Typography>© 2023</Typography>
      </Footer>
    </>
  );
}
