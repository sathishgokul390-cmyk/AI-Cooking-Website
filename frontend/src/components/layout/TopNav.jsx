import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  Button,
  IconButton,
  Avatar,
  Badge,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
  Tooltip,
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import SoupKitchenRoundedIcon from '@mui/icons-material/SoupKitchenRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import EnergySavingsLeafRoundedIcon from '@mui/icons-material/EnergySavingsLeafRounded';
import { useThemeMode } from '../../context/ThemeModeContext';

const NAV_ITEMS = [
  { label: 'Home', path: '/', icon: <HomeRoundedIcon /> },
  { label: 'Discover', path: '/discover', icon: <ExploreRoundedIcon /> },
  { label: 'My Ingredients', path: '/my-ingredients', icon: <ShoppingBasketRoundedIcon /> },
  { label: 'AI Chef', path: '/ai-chef', icon: <SmartToyRoundedIcon /> },
  { label: 'Smart Recipes', path: '/smart-recipes', icon: <SoupKitchenRoundedIcon /> },
  { label: 'Favorites', path: '/favorites', icon: <FavoriteRoundedIcon /> },
  { label: 'Meal Planner', path: '/meal-planner', icon: <CalendarMonthRoundedIcon /> },
  { label: 'Nutrition', path: '/nutrition', icon: <LocalFireDepartmentRoundedIcon /> },
  { label: 'Profile', path: '/profile', icon: <PersonRoundedIcon /> },
];

export default function TopNav() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { mode, toggleMode } = useThemeMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const navLinkStyle = ({ isActive }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '8px 12px',
    borderRadius: 999,
    textDecoration: 'none',
    color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
    fontWeight: 700,
    fontSize: 14,
    position: 'relative',
    transition: 'color 0.2s ease, background-color 0.2s ease',
    backgroundColor: isActive ? theme.palette.accent.greenSoft : 'transparent',
  });

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar sx={{ minHeight: { xs: 64, md: 72 }, gap: 2 }}>
          {!isDesktop && (
            <IconButton edge="start" onClick={() => setDrawerOpen(true)} aria-label="open navigation menu">
              <MenuRoundedIcon />
            </IconButton>
          )}

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ cursor: 'pointer', mr: 1 }}
            onClick={() => navigate('/')}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: '12px',
                display: 'grid',
                placeItems: 'center',
                background: theme.custom.gradients.brand,
                color: '#fff',
                animation: 'floatY 4s ease-in-out infinite',
              }}
            >
              <EnergySavingsLeafRoundedIcon fontSize="small" />
            </Box>
            {(isDesktop || true) && (
              <Typography variant="h6" sx={{ fontWeight: 800, display: { xs: 'none', sm: 'block' } }}>
                Savory
              </Typography>
            )}
          </Stack>

          {isDesktop && (
            <Stack direction="row" spacing={0.5} sx={{ flexGrow: 1, justifyContent: 'center' }}>
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.path} to={item.path} style={navLinkStyle} end={item.path === '/'}>
                  {React.cloneElement(item.icon, { sx: { fontSize: 18 } })}
                  {item.label}
                </NavLink>
              ))}
            </Stack>
          )}

          <Box sx={{ flexGrow: isDesktop ? 0 : 1 }} />

          <Stack direction="row" spacing={1} alignItems="center">
            <Tooltip title={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
              <IconButton onClick={toggleMode} aria-label="toggle theme" sx={{ transition: 'transform 0.3s' }}>
                {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon sx={{ color: '#F5A524' }} />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton aria-label="notifications">
                <Badge color="secondary" variant="dot">
                  <NotificationsNoneRoundedIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Avatar
              onClick={() => navigate('/profile')}
              sx={{
                width: 36,
                height: 36,
                cursor: 'pointer',
                background: theme.custom.gradients.brand,
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              JS
            </Avatar>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, pt: 2 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 2, pb: 2 }}>
            <Box
              sx={{
                width: 34,
                height: 34,
                borderRadius: '10px',
                display: 'grid',
                placeItems: 'center',
                background: theme.custom.gradients.brand,
                color: '#fff',
              }}
            >
              <EnergySavingsLeafRoundedIcon fontSize="small" />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Savory
            </Typography>
          </Stack>
          <List sx={{ px: 1 }}>
            {NAV_ITEMS.map((item) => (
              <ListItemButton
                key={item.path}
                component={NavLink}
                to={item.path}
                end={item.path === '/'}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  '&.active': {
                    backgroundColor: 'primary.main',
                    color: '#fff',
                    '& .MuiListItemIcon-root': { color: '#fff' },
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
