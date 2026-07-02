import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const GREEN = '#3a7d44';

const FOOD_TYPES = [
  { key: 'all', label: 'All', emoji: '🍽️', lightBg: '#f1f5f9' },
  { key: 'breakfast', label: 'Breakfast', emoji: '🍳', lightBg: '#fff7ed' },
  { key: 'lunch', label: 'Lunch', emoji: '🍱', lightBg: '#f0fdf4' },
  { key: 'dinner', label: 'Dinner', emoji: '🍛', lightBg: '#fef9c3' },
  { key: 'snacks', label: 'Snacks', emoji: '🥨', lightBg: '#fef3c7' },
  { key: 'desserts', label: 'Desserts', emoji: '🍰', lightBg: '#fdf2f8' },
  { key: 'drinks', label: 'Drinks', emoji: '🥤', lightBg: '#eff6ff' },
  { key: 'salads', label: 'Salads', emoji: '🥗', lightBg: '#f0fdf4' },
  { key: 'soups', label: 'Soups', emoji: '🍲', lightBg: '#fff7ed' },
];

export default function FoodTypeScroller({ selected, onSelect }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Master Luxury Tokens Mapping Dark/Light Theme Depth
  const surfaces = {
    containerBg: isDark ? 'rgba(15, 23, 42, 0.4)' : '#ffffff',
    unselectedCircleBg: isDark ? 'rgba(255, 255, 255, 0.05)' : undefined, // fallback to f.lightBg
    borderActive: isDark ? 'rgba(74, 222, 128, 0.4)' : 'rgba(58, 125, 68, 0.2)',
    textUnselected: isDark ? '#94a3b8' : '#64748b',
    glowActive: isDark 
      ? '0 0 25px rgba(58, 125, 68, 0.45), inset 0 1px 1px rgba(255,255,255,0.2)' 
      : '0 8px 20px rgba(58, 125, 68, 0.18)',
  };

  return (
    <Box sx={{
      display: 'flex',
      // Dynamic grid gap distribution adhering to 320px - 1024px+ responsive requirements
      gap: { xs: 2.25, sm: 3, md: 3.5, lg: 4.5 },
      justifyContent: { xs: 'flex-start', md: 'space-between' },
      alignItems: 'center',
      overflowX: 'auto',
      width: '100%',
      py: 1,
      px: 0.5,
      '&::-webkit-scrollbar': { display: 'none' }, // Clean premium scroller (hide track)
      scrollbarWidth: 'none', 
    }}>
      {FOOD_TYPES.map((f) => {
        const active = selected === f.key;
        return (
          <Box
            key={f.key}
            onClick={() => onSelect(f.key)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1.25,
              cursor: 'pointer',
              flexShrink: 0,
              userSelect: 'none',
              transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
              '&:hover': { 
                transform: 'translateY(-4px)',
                '& .food-type-text': {
                  color: active ? GREEN : isDark ? '#f8fafc' : '#0f172a'
                }
              },
              '&:active': { transform: 'scale(0.95)' }
            }}
          >
            <Box sx={{
              // Premium expanded sizing mapping perfectly onto layout containers
              width: { xs: 58, sm: 66, md: 72 },
              height: { xs: 58, sm: 66, md: 72 },
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: { xs: 24, sm: 28, md: 30 },
              bgcolor: active
                ? GREEN
                : surfaces.unselectedCircleBg || f.lightBg,
              border: '1px solid',
              borderColor: active
                ? surfaces.borderActive
                : isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.02)',
              boxShadow: active ? surfaces.glowActive : 'none',
              transform: active ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
            }}>
              {/* Soft scaled element animation layout for the inner emojis */}
              <Box sx={{ 
                transform: active ? 'scale(1.05)' : 'scale(1)', 
                transition: 'transform 0.2s ease' 
              }}>
                {f.emoji}
              </Box>
            </Box>
            
            <Typography 
              className="food-type-text"
              sx={{
                fontWeight: active ? 700 : 600,
                fontSize: { xs: 11, sm: 12, md: 13 },
                color: active ? GREEN : surfaces.textUnselected,
                transition: 'color 0.25s ease',
                whiteSpace: 'nowrap',
                letterSpacing: active ? '-0.1px' : '-0.2px',
              }}
            >
              {f.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export { FOOD_TYPES };