import React, { useEffect, useMemo, useState } from 'react';
import {
  Paper, Stack, Typography, Select, MenuItem,
  Box, Button, Grid, Chip, Skeleton, useTheme,
} from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useIngredients } from '../context/IngredientsContext';
import { fetchRecipesByIngredients } from '../../services/mealApi';
import { useNavigate } from 'react-router-dom';

const GREEN = '#3a7d44';

const SORT_OPTIONS = [
  { value: 'best', label: 'Match: Best' },
  { value: 'protein', label: 'Highest Protein' },
  { value: 'calories', label: 'Lowest Calories' },
  { value: 'fastest', label: 'Fastest' },
  { value: 'newest', label: 'Newest' },
];

/* ── Single recipe thumbnail ── */
function RecipeThumb({ recipe, borderClr, thumbBg, subClr, titleClr }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Box sx={{
      borderRadius: 3, overflow: 'hidden',
      border: `1px solid ${borderClr}`,
      bgcolor: thumbBg,
      cursor: 'pointer',
      transition: 'box-shadow 0.22s ease, transform 0.22s ease',
      '&:hover': { boxShadow: '0 6px 20px rgba(0,0,0,.12)', transform: 'translateY(-3px)' },
    }}>
      {/* Image */}
      <Box sx={{ position: 'relative', height: { xs: 100, sm: 115, md: 120 } }}>
        {!loaded && <Skeleton variant="rectangular" height="100%" animation="wave" />}
        <Box
          component="img"
          src={recipe.image}
          alt={recipe.name}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          sx={{ width: '100%', height: '100%', objectFit: 'cover', display: loaded ? 'block' : 'none' }}
        />
        {typeof recipe.matchPercent === 'number' && (
          <Chip
            label={`${recipe.matchPercent}% Match`}
            size="small"
            sx={{
              position: 'absolute', bottom: 7, left: 7,
              bgcolor: 'rgba(58,125,68,.88)',
              color: '#fff', fontWeight: 700, fontSize: 10, height: 20,
            }}
          />
        )}
      </Box>
      {/* Info */}
      <Box sx={{ px: 1.25, pt: 0.75, pb: 1.25 }}>
        <Typography sx={{ fontWeight: 700, display: 'block', color: titleClr, fontSize: 12, mb: 0.5, lineHeight: 1.3 }} noWrap>
          {recipe.name}
        </Typography>
        <Stack direction="row" gap={1.5} alignItems="center">
          <Stack direction="row" gap={0.3} alignItems="center">
            <AccessTimeRoundedIcon sx={{ fontSize: 12, color: subClr }} />
            <Typography sx={{ fontSize: 11, color: subClr }}>{recipe.cookTime} min</Typography>
          </Stack>
          <Stack direction="row" gap={0.3} alignItems="center">
            <LocalFireDepartmentRoundedIcon sx={{ fontSize: 12, color: subClr }} />
            <Typography sx={{ fontSize: 11, color: subClr }}>{recipe.calories} kcal</Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

/* ── Main component ── */
export default function RecipesYouCanMake({ limit }) {
  const theme = useTheme();
  const { ingredients } = useIngredients();
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState('best');

  const isDark = theme.palette.mode === 'dark';
  const cardBg = theme.palette.background.paper;
  const thumbBg = isDark ? '#0d0f14' : '#f9fafb';
  const border = theme.palette.divider;
  const titleClr = theme.palette.text.primary;
  const subClr = theme.palette.text.secondary;
  const divider = isDark ? 'rgba(255,255,255,.08)' : '#f3f4f6';
  const greenSoft = isDark ? 'rgba(58,125,68,.18)' : '#f0f9f1';
  const selectBg = isDark ? '#0d0f14' : '#f9fafb';

  useEffect(() => {
    let active = true;
    if (ingredients.length === 0) { setRecipes([]); return undefined; }
    setLoading(true);
    fetchRecipesByIngredients(ingredients)
      .then((res) => { if (active) setRecipes(res); })
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [ingredients]);

  const sorted = useMemo(() => {
    const list = [...recipes];
    switch (sort) {
      case 'protein': return list.sort((a, b) => b.protein - a.protein);
      case 'calories': return list.sort((a, b) => a.calories - b.calories);
      case 'fastest': return list.sort((a, b) => a.cookTime - b.cookTime);
      case 'newest': return list.sort((a, b) => Number(b.id) - Number(a.id));
      default: return list.sort((a, b) => b.matchPercent - a.matchPercent);
    }
  }, [recipes, sort]);

  const shown = limit ? sorted.slice(0, limit) : sorted;

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
      {/* ── Header ── */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ sm: 'center' }}
        gap={1.5}
        sx={{ mb: 2 }}
      >
        <Stack direction="row" gap={1.5} alignItems="center">
          <Box sx={{
            width: 40, height: 40, borderRadius: 2,
            bgcolor: greenSoft,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <AutoAwesomeRoundedIcon sx={{ color: GREEN, fontSize: 22 }} />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 800, color: titleClr, fontSize: { xs: 15, md: 16 }, lineHeight: 1.25 }}>
              Recipes You Can Make
            </Typography>
            <Typography sx={{ color: subClr, fontSize: { xs: 11, md: 12 }, mt: 0.25 }}>
              Based on your ingredients
            </Typography>
          </Box>
        </Stack>

        <Select
          size="small"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          sx={{
            borderRadius: 999,
            minWidth: { xs: '100%', sm: 160 },
            bgcolor: selectBg,
            fontSize: 13,
            fontWeight: 600,
            '& .MuiOutlinedInput-notchedOutline': { borderColor: border },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: GREEN },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: GREEN },
            '& .MuiSelect-select': { color: titleClr, py: 1 },
          }}
        >
          {SORT_OPTIONS.map((o) => (
            <MenuItem key={o.value} value={o.value} sx={{ fontSize: 13 }}>
              {o.label}
            </MenuItem>
          ))}
        </Select>
      </Stack>

      <Box sx={{ height: 1, bgcolor: divider, mb: 2 }} />

      {/* ── Content ── */}
      {loading ? (
        <Grid container spacing={1.5}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Grid item xs={6} sm={3} key={i}>
              <Skeleton variant="rounded" height={140} animation="wave" sx={{ borderRadius: 3 }} />
            </Grid>
          ))}
        </Grid>
      ) : shown.length === 0 ? (
        <Stack alignItems="center" gap={1} sx={{ py: 4, textAlign: 'center' }}>
          <AutoAwesomeRoundedIcon sx={{ color: GREEN, opacity: 0.4, fontSize: 36 }} />
          <Typography sx={{ fontWeight: 700, color: titleClr, fontSize: 14 }}>
            No matching recipes yet
          </Typography>
          <Typography sx={{ color: subClr, maxWidth: 280, fontSize: 12 }}>
            Add ingredients like tomato, egg, or chicken to find recipes you can cook right now.
          </Typography>
        </Stack>
      ) : (
        <Grid container spacing={1.5}>
          {shown.map((r) => (
            <Grid item xs={6} sm={3} key={r.id}>
              <RecipeThumb
                recipe={r}
                borderClr={border}
                thumbBg={thumbBg}
                subClr={subClr}
                titleClr={titleClr}
              />
            </Grid>
          ))}
        </Grid>
      )}

      {/* ── View All button ── */}
      <Button
        variant="contained"
        fullWidth
        endIcon={<ArrowForwardRoundedIcon />}
        onClick={() => navigate('/my-ingredients')}
        sx={{
          mt: 2.5,
          borderRadius: 999,
          bgcolor: GREEN,
          fontWeight: 700,
          py: 1.25,
          fontSize: { xs: 13, md: 14 },
          boxShadow: 'none',
          '&:hover': { bgcolor: '#2d6235', boxShadow: '0 4px 14px rgba(58,125,68,.3)' },
        }}
      >
        View All Recipes
      </Button>
    </Paper>
  );
}
