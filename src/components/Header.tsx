import { useState } from "react";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { Menu as MenuIcon, DarkMode, LightMode } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { theme: customTheme, toggleTheme } = useCustomTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('md'));
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "About", targetId: "about" },
    { name: "Projects", targetId: "projects" },
    { name: "Contact", targetId: "contact" }
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)!;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false); // close drawer if mobile
  };

  return (
    <AppBar position="fixed" color="default" elevation={1}
      sx={{
        backgroundColor: customTheme === 'dark' ? 'rgba(33, 33, 33, 0.98)' : 'rgba(255, 255, 255, 0.98)',
        color: customTheme === 'dark' ? '#fff' : 'inherit'
      }}
    >
      <Toolbar>
        <Typography
          className="hover:cursor-pointer"
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            color: customTheme === 'dark' ? 'var(--primary-light)' : 'var(--primary-main)'
          }}
          onClick={() => { navigate("/") }}
        >
          Piyush Badhe
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              onClick={() => scrollToSection(item.targetId)}
              color="inherit"
              sx={{
                mx: 1,
                color: customTheme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                '&:hover': {
                  color: customTheme === 'dark' ? 'var(--primary-light)' : 'var(--primary-main)',
                  backgroundColor: 'transparent'
                }
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>

        {/* Theme Toggle Button */}
        <IconButton
          onClick={toggleTheme}
          color="inherit"
          aria-label={`Switch to ${customTheme === 'dark' ? 'light' : 'dark'} mode`}
          sx={{ ml: 1 }}
        >
          {customTheme === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>

        {/* Mobile Menu Button */}
        {isSmallScreen && (
          <IconButton
            color="inherit"
            aria-label="Open menu"
            edge="end"
            onClick={toggleMobileMenu}
            sx={{ ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: customTheme === 'dark' ? 'rgb(33, 33, 33)' : 'rgb(255, 255, 255)',
            color: customTheme === 'dark' ? '#fff' : 'inherit'
          },
        }}
      >
        <Box sx={{ width: 240 }} role="presentation">
          <List>
            {navItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component="a"
                  onClick={() => scrollToSection(item.targetId)}
                  sx={{
                    '&:hover': {
                      backgroundColor: customTheme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                    }
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    sx={{
                      '& .MuiTypography-root': {
                        fontWeight: 500
                      }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
