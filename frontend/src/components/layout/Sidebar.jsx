import React from 'react';
import { Paper, List, ListItemButton, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import EnergySavingsLeafRoundedIcon from '@mui/icons-material/EnergySavingsLeafRounded';
import GrassRoundedIcon from '@mui/icons-material/GrassRounded';

export const CATEGORIES = [
  { key: 'all', label: 'All Recipes', icon: <GridViewRoundedIcon /> },
  { key: 'trending', label: 'Trending Now', icon: <TrendingUpRoundedIcon /> },
  { key: 'healthy', label: 'Healthy Picks', icon: <FavoriteBorderRoundedIcon /> },
  { key: 'quick', label: 'Quick Meals', icon: <BoltRoundedIcon /> },
  { key: 'highProtein', label: 'High Protein', icon: <FitnessCenterRoundedIcon /> },
  { key: 'lowCalorie', label: 'Low Calorie', icon: <WaterDropRoundedIcon /> },
  { key: 'vegetarian', label: 'Vegetarian', icon: <SpaRoundedIcon /> },
  { key: 'vegan', label: 'Vegan', icon: <EnergySavingsLeafRoundedIcon /> },
  { key: 'glutenFree', label: 'Gluten Free', icon: <GrassRoundedIcon /> },
];

export default function Sidebar({ selected, onSelect }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 4,
        position: { lg: 'sticky' },
        top: { lg: 88 },
        height: 'fit-content',
      }}
    >
      <Typography variant="subtitle1" sx={{ px: 1, mb: 1.5, fontWeight: 800 }}>
        Explore Categories
      </Typography>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {CATEGORIES.map((cat) => {
          const active = selected === cat.key;
          return (
            <ListItemButton
              key={cat.key}
              selected={active}
              onClick={() => onSelect(cat.key)}
              sx={{
                borderRadius: 2.5,
                transition: 'transform 0.18s ease, background-color 0.18s ease',
                '&:hover': { transform: 'translateX(4px)' },
                '&.Mui-selected': {
                  backgroundColor: 'accent.greenSoft',
                  color: 'primary.main',
                  fontWeight: 700,
                  '&:hover': { backgroundColor: 'accent.greenSoft' },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 38, color: active ? 'primary.main' : 'text.secondary' }}>
                {cat.icon}
              </ListItemIcon>
              <ListItemText
                primary={cat.label}
                primaryTypographyProps={{ fontWeight: active ? 700 : 500, fontSize: 14.5 }}
              />
              {active && (
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                  }}
                />
              )}
            </ListItemButton>
          );
        })}
      </List>
    </Paper>
  );
}
