import React, { useState } from 'react';
import {
  Paper, Stack, Typography, TextField, Button,
  Chip, Box, InputAdornment, useTheme,
} from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useIngredients } from '../context/IngredientsContext';

const GREEN = '#3a7d44';

const POPULAR = [
  { name: 'Potato', emoji: '🥔' },
  { name: 'Carrot', emoji: '🥕' },
  { name: 'Rice', emoji: '🍚' },
  { name: 'Cheese', emoji: '🧀' },
  { name: 'Milk', emoji: '🥛' },
  { name: 'Bell Pepper', emoji: '🫑' },
];

const CHIP_EMOJI = {
  tomato: '🍅', onion: '🧅', egg: '🥚', spinach: '🥬',
  chicken: '🍗', garlic: '🧄', potato: '🥔', carrot: '🥕',
  rice: '🍚', cheese: '🧀', milk: '🥛',
};

export default function IngredientsPanel() {
  const theme = useTheme();
  const { ingredients, addIngredient, removeIngredient } = useIngredients();
  const [input, setInput] = useState('');

  const isDark = theme.palette.mode === 'dark';
  const titleClr = theme.palette.text.primary;
  const subClr = theme.palette.text.secondary;
  const cardBg = theme.palette.background.paper;
  const border = theme.palette.divider;
  const inputBg = isDark ? '#0d0f14' : '#f9fafb';
  const inputBdr = isDark ? 'rgba(255,255,255,.12)' : '#e5e7eb';
  const divider = isDark ? 'rgba(255,255,255,.08)' : '#f3f4f6';
  const greenSoft = isDark ? 'rgba(58,125,68,.2)' : '#f0f9f1';
  const chipBg = isDark ? 'rgba(58,125,68,.22)' : '#e6f4e9';
  const bubbleBg = isDark ? 'rgba(255,255,255,.06)' : '#f9fafb';
  const bubbleBdr = isDark ? 'rgba(255,255,255,.12)' : '#e5e7eb';

  const handleAdd = () => {
    if (!input.trim()) return;
    addIngredient(input.trim());
    setInput('');
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, sm: 2.5, md: 3 },
        borderRadius: 3,
        border: `1px solid ${border}`,
        bgcolor: cardBg,
        height: '100%',
        transition: 'background-color 0.25s ease',
      }}
    >
      {/* ── Title ── */}
      <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 0.5 }}>
        <Box sx={{
          width: 40, height: 40, borderRadius: 2,
          bgcolor: greenSoft,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <ShoppingBasketRoundedIcon sx={{ color: GREEN, fontSize: 22 }} />
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 800, color: titleClr, fontSize: { xs: 15, md: 16 }, lineHeight: 1.25 }}>
            My Ingredients
          </Typography>
          <Typography sx={{ color: subClr, fontSize: { xs: 11, md: 12 }, mt: 0.25 }}>
            Add ingredients — we'll suggest recipes you can cook!
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ height: 1, bgcolor: divider, my: 2 }} />

      {/* ── Input row ── */}
      <Typography sx={{ fontWeight: 700, color: titleClr, fontSize: 13, mb: 1 }}>
        Add Your Ingredients
      </Typography>
      <Stack direction="row" gap={1} sx={{ mb: 2 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search ingredients…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon sx={{ fontSize: 17, color: subClr }} />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 999,
              bgcolor: inputBg,
              '& fieldset': { borderColor: inputBdr },
              '&:hover fieldset': { borderColor: GREEN },
              '&.Mui-focused fieldset': { borderColor: GREEN },
              '& input': { color: titleClr, fontSize: 13 },
              '& input::placeholder': { color: subClr, opacity: 1 },
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handleAdd}
          startIcon={<AddRoundedIcon />}
          sx={{
            borderRadius: 999,
            px: { xs: 2, md: 2.5 },
            whiteSpace: 'nowrap',
            bgcolor: GREEN,
            fontWeight: 700,
            fontSize: 13,
            boxShadow: 'none',
            flexShrink: 0,
            '&:hover': { bgcolor: '#2d6235', boxShadow: 'none' },
          }}
        >
          Add
        </Button>
      </Stack>

      {/* ── Current ingredient chips ── */}
      <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mb: 2, minHeight: 34 }}>
        {ingredients.map((ing) => (
          <Chip
            key={ing}
            label={`${CHIP_EMOJI[ing.toLowerCase()] || '🍽️'} ${ing}`}
            onDelete={() => removeIngredient(ing)}
            size="small"
            sx={{
              bgcolor: chipBg, color: GREEN, fontWeight: 600, fontSize: 12,
              border: `1px solid ${greenSoft}`,
              '& .MuiChip-deleteIcon': { color: GREEN, '&:hover': { color: '#e53e3e' } },
              transition: 'transform 0.15s',
              '&:hover': { transform: 'scale(1.04)' },
            }}
          />
        ))}
        {ingredients.length > 5 && (
          <Chip
            icon={<AddCircleOutlineRoundedIcon sx={{ fontSize: 13 }} />}
            label="Add more"
            size="small"
            sx={{ bgcolor: isDark ? 'rgba(255,255,255,.07)' : '#f3f4f6', color: subClr, fontWeight: 600, fontSize: 12 }}
          />
        )}
        {ingredients.length === 0 && (
          <Typography sx={{ color: subClr, fontSize: 12, fontStyle: 'italic', alignSelf: 'center' }}>
            No ingredients yet — add some above to get recipe matches.
          </Typography>
        )}
      </Stack>

      <Box sx={{ height: 1, bgcolor: divider, mb: 2 }} />

      {/* ── Popular ingredients ── */}
      <Typography sx={{ fontWeight: 700, color: titleClr, fontSize: 13, mb: 1.5 }}>
        Popular Ingredients
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={{ xs: 1.5, sm: 2 }}>
        {POPULAR.map((p) => (
          <Stack
            key={p.name}
            alignItems="center"
            gap={0.5}
            onClick={() => addIngredient(p.name)}
            sx={{
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'transform 0.15s',
              '&:hover': { transform: 'translateY(-3px)' },
            }}
          >
            <Box sx={{
              width: { xs: 48, md: 54 },
              height: { xs: 48, md: 54 },
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: { xs: 22, md: 26 },
              bgcolor: bubbleBg,
              border: `1.5px solid ${bubbleBdr}`,
              transition: 'all 0.15s',
              '&:hover': { bgcolor: greenSoft, borderColor: GREEN },
            }}>
              {p.emoji}
            </Box>
            <Typography sx={{ fontSize: 11, color: subClr, fontWeight: 500 }}>{p.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
}
