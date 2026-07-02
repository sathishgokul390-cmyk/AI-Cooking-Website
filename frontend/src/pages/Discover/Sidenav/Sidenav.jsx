import React, { useState } from 'react';
import {
  Box, List, ListItemButton, ListItemIcon,
  ListItemText, Typography, Tooltip, IconButton,
  useMediaQuery, useTheme, Drawer, Divider,
} from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import EnergySavingsLeafRoundedIcon from '@mui/icons-material/EnergySavingsLeafRounded';
import GrassRoundedIcon from '@mui/icons-material/GrassRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

const GREEN = '#3a7d44';

export const CATEGORIES = [
  { key: 'all', label: 'All Recipes', icon: <GridViewRoundedIcon sx={{ fontSize: '1.15rem' }} /> },
  { key: 'trending', label: 'Trending Now', icon: <TrendingUpRoundedIcon sx={{ fontSize: '1.15rem' }} /> },
  { key: 'healthy', label: 'Healthy Picks', icon: <FavoriteBorderRoundedIcon sx={{ fontSize: '1.15rem' }} /> },
  { key: 'quick', label: 'Quick Meals', icon: <BoltRoundedIcon sx={{ fontSize: '1.15rem' }} /> },
  { key: 'highProtein', label: 'High Protein', icon: <FitnessCenterRoundedIcon sx={{ fontSize: '1.15rem' }} /> },
  { key: 'lowCalorie', label: 'Low Calorie', icon: <WaterDropRoundedIcon sx={{ fontSize: '1.15rem' }} /> },
  { key: 'vegetarian', label: 'Vegetarian', icon: <SpaRoundedIcon sx={{ fontSize: '1.15rem' }} /> },
  { key: 'vegan', label: 'Vegan', icon: <EnergySavingsLeafRoundedIcon sx={{ fontSize: '1.15rem' }} /> },
  { key: 'glutenFree', label: 'Gluten Free', icon: <GrassRoundedIcon sx={{ fontSize: '1.15rem' }} /> },
];

/* ─── Shared List Content ─── */
function CategoryList({ selected, onSelect, collapsed, onClose }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Premium Luxury Workspace Tokens
  const bgActive = isDark ? 'rgba(58, 125, 68, 0.16)' : '#f0f9f1';
  const bgHover = isDark ? 'rgba(255, 255, 255, 0.04)' : '#f8fafc';
  const borderActive = isDark ? 'rgba(74, 222, 128, 0.25)' : 'rgba(58, 125, 68, 0.15)';
  const textColor = isDark ? '#f1f5f9' : '#1e293b';
  const subColor = isDark ? '#94a3b8' : '#64748b';

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header Container Context */}
      <Box sx={{
        px: collapsed ? 1.5 : 2.5,
        pt: 2.5, pb: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'space-between',
        minHeight: 60,
      }}>
        {!collapsed && (
          <Typography 
            variant="subtitle2" 
            sx={{ 
              fontWeight: 800, 
              color: textColor, 
              fontSize: '13px', 
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              opacity: 0.95
            }}
          >
            Explore Categories
          </Typography>
        )}
      </Box>

      <Divider sx={{ mx: collapsed ? 1 : 2.5, mb: 1.5, opacity: isDark ? 0.3 : 0.6 }} />

      <List disablePadding sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.75, px: 1.5 }}>
        {CATEGORIES.map((cat) => {
          const active = selected === cat.key;
          const btn = (
            <ListItemButton
              key={cat.key}
              selected={active}
              onClick={() => { onSelect(cat.key); onClose?.(); }}
              sx={{
                borderRadius: '14px',
                px: collapsed ? 1 : 2,
                py: 1.2,
                minHeight: 44,
                justifyContent: collapsed ? 'center' : 'flex-start',
                transition: 'all 0.25s cubic-bezier(0.25, 1, 0.5, 1)',
                border: '1px solid',
                borderColor: active ? borderActive : 'transparent',
                bgcolor: active ? bgActive : 'transparent',
                '&:hover': { 
                  bgcolor: active ? bgActive : bgHover,
                  transform: 'translateX(3px)',
                  '& .sidebar-icon': { color: GREEN }
                },
                '&:active': { transform: 'scale(0.98)' },
                '&.Mui-selected': { 
                  bgcolor: bgActive, 
                  '&:hover': { bgcolor: bgActive },
                  boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.15)' : 'none'
                },
              }}
            >
              <ListItemIcon className="sidebar-icon" sx={{
                minWidth: collapsed ? 0 : 36,
                color: active ? GREEN : subColor,
                transition: 'color 0.2s ease, transform 0.2s ease',
                justifyContent: 'center',
              }}>
                {cat.icon}
              </ListItemIcon>
              
              {!collapsed && (
                <ListItemText
                  primary={cat.label}
                  primaryTypographyProps={{
                    fontWeight: active ? 700 : 600,
                    fontSize: '13.5px',
                    color: active ? GREEN : textColor,
                    noWrap: true,
                    letterSpacing: '-0.1px',
                  }}
                />
              )}
              
              {!collapsed && active && (
                <Box 
                  sx={{ 
                    width: 6, 
                    height: 6, 
                    borderRadius: '50%', 
                    bgcolor: GREEN, 
                    flexShrink: 0, 
                    ml: 1,
                    boxShadow: `0 0 8px ${GREEN}`
                  }} 
                />
              )}
            </ListItemButton>
          );

          return collapsed ? (
            <Tooltip key={cat.key} title={cat.label} placement="right" arrow>
              <Box sx={{ mb: 0.5 }}>{btn}</Box>
            </Tooltip>
          ) : (
            <React.Fragment key={cat.key}>{btn}</React.Fragment>
          );
        })}
      </List>
    </Box>
  );
}

/* ─── Main Export Component ─── */
export default function Sidebar({ selected, onSelect }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Rigorous Window Viewport Breakpoint Range Matchers
  const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:359px)');
  const isStandardMobile = useMediaQuery('(min-width:360px) and (max-width:767px)');
  const isMobile = useMediaQuery('(max-width:767px)');
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1023px)');
  const isDesktop = useMediaQuery('(min-width:1024px)');

  const [collapsed, setCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Advanced Visual Elevation Surface Styles
  const paperBg = isDark ? 'rgba(22, 28, 45, 0.75)' : '#ffffff';
  const borderColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)';
  const backdropShadow = isDark 
    ? '0 10px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)' 
    : '0 8px 32px rgba(0, 0, 0, 0.02)';

  /* ── 1. MOBILE RESPONSIVE LAYOUT (320px - 767px) ── */
  if (isMobile) {
    return (
      <>
        {/* Responsive Drawer Pill Trigger */}
        <Box sx={{
          position: 'fixed',
          top: isSmallMobile ? 12 : 16,
          left: isSmallMobile ? 12 : 16,
          zIndex: 1100,
        }}>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            size="medium"
            sx={{
              bgcolor: GREEN,
              color: '#ffffff',
              borderRadius: '12px',
              width: 40,
              height: 40,
              boxShadow: '0 4px 14px rgba(58, 125, 68, 0.35)',
              transition: 'all 0.2s ease',
              '&:hover': { bgcolor: '#2d6235', transform: 'scale(1.04)' },
              '&:active': { transform: 'scale(0.96)' }
            }}
          >
            <MenuRoundedIcon fontSize="small" />
          </IconButton>
        </Box>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: isSmallMobile ? 240 : 270,
              bgcolor: isDark ? '#111827' : '#ffffff',
              backgroundImage: 'none',
              borderRight: `1px solid ${borderColor}`,
              boxShadow: '10px 0 30px rgba(0,0,0,0.05)',
              pt: 1,
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: 2, pt: 1 }}>
            <IconButton 
              size="small" 
              onClick={() => setDrawerOpen(false)}
              sx={{ border: `1px solid ${borderColor}`, borderRadius: '10px' }}
            >
              <ChevronLeftRoundedIcon fontSize="small" />
            </IconButton>
          </Box>
          <CategoryList
            selected={selected}
            onSelect={onSelect}
            collapsed={false}
            onClose={() => setDrawerOpen(false)}
          />
        </Drawer>
      </>
    );
  }

  /* ── 2. TABLET RESPONSIVE LAYOUT (768px - 1023px) ── */
  if (isTablet) {
    return (
      <Box sx={{
        width: 72,
        flexShrink: 0,
        bgcolor: paperBg,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${borderColor}`,
        borderRadius: '24px',
        position: 'sticky',
        top: 40,
        height: 'auto',
        maxHeight: 'calc(100vh - 80px)',
        boxShadow: backdropShadow,
        overflow: 'hidden',
        py: 1,
      }}>
        <CategoryList selected={selected} onSelect={onSelect} collapsed={true} />
      </Box>
    );
  }

  /* ── 3. DESKTOP / LARGE TABLET LAYOUT (1024px+) ── */
  return (
    <Box sx={{
      width: collapsed ? 76 : '100%',
      transition: 'width 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
      bgcolor: paperBg,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: `1px solid ${borderColor}`,
      borderRadius: '24px',
      position: 'sticky',
      top: 40,
      height: 'auto',
      maxHeight: 'calc(100vh - 80px)',
      boxShadow: backdropShadow,
      overflow: 'hidden',
      pb: 2,
    }}>
      {/* Structural Toggle Header Row */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'flex-end',
        px: 2,
        pt: 2,
      }}>
        <Tooltip title={collapsed ? 'Expand Workspace' : 'Collapse Sidebar'} placement="right" arrow>
          <IconButton
            size="small"
            onClick={() => setCollapsed((v) => !v)}
            sx={{
              color: isDark ? '#94a3b8' : '#64748b',
              border: `1px solid ${borderColor}`,
              borderRadius: '10px',
              width: 32,
              height: 32,
              transition: 'all 0.2s',
              '&:hover': { 
                bgcolor: isDark ? 'rgba(255,255,255,0.05)' : '#f8fafc',
                color: GREEN,
                borderColor: GREEN
              },
            }}
          >
            {collapsed ? <MenuRoundedIcon sx={{ fontSize: '1.1rem' }} /> : <ChevronLeftRoundedIcon sx={{ fontSize: '1.1rem' }} />}
          </IconButton>
        </Tooltip>
      </Box>

      <CategoryList selected={selected} onSelect={onSelect} collapsed={collapsed} />
    </Box>
  );
}