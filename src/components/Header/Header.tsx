import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { TelLink } from "./styles";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position='fixed'
      sx={{ background: "rgba(249, 249, 249, 0.9)", boxShadow: "none" }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ padding: "5px 0" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
                "& .MuiMenu-list": {
                  display: "flex",
                  flexDirection: "column",
                },
                "& a": {
                  color: "var(--main-text-color)",
                },
              }}
            >
              <Button onClick={handleCloseNavMenu} href='#prices'>
                <Typography textAlign='center'>Ціни</Typography>
              </Button>
              <Button onClick={handleCloseNavMenu} href='#services'>
                <Typography textAlign='center'>Послуги</Typography>
              </Button>
              <Button onClick={handleCloseNavMenu} href='#works'>
                <Typography textAlign='center'>Роботи</Typography>
              </Button>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "var(--main-text-color)", display: "block" }}
              href='#prices'
            >
              Ціни
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "var(--main-text-color)", display: "block" }}
              href='#services'
            >
              Послуги
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "var(--main-text-color)", display: "block" }}
              href='#works'
            >
              Роботи
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              color: "var(--main-text-color)",
            }}
          >
            <TelLink href='tel:+380961280234'>+38096-128-02-34</TelLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
