import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Box, Stack, Typography, IconButton, Chip, Skeleton } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { useNavigate } from 'react-router-dom';
// import { useFavorites } from '../../context/FavoritesContext';
import { useFavorites } from "../../components/context/FavoritesContext";

const BADGE_COLORS = {
  Healthy: { bg: 'rgba(31,157,85,0.14)', color: '#137A3F' },
  'High Protein': { bg: 'rgba(62,143,232,0.14)', color: '#2D6FBB' },
  'Low Calorie': { bg: 'rgba(245,165,36,0.16)', color: '#B5790E' },
  Quick: { bg: 'rgba(232,115,74,0.16)', color: '#C1522D' },
  Vegan: { bg: 'rgba(31,157,85,0.14)', color: '#137A3F' },
};

export default function RecipeCard({ recipe, matchPercent, missingIngredients, compact = false }) {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [imgLoaded, setImgLoaded] = useState(false);
  const fav = isFavorite(recipe.id);

  return (
    <Card
      elevation={0}
      sx={{
        cursor: 'pointer',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: (t) => t.shadows[6],
        },
      }}
      onClick={() => navigate(`/recipe/${recipe.id}`)}
    >
      <Box sx={{ position: 'relative' }}>
        {!imgLoaded && <Skeleton variant="rectangular" height={compact ? 140 : 170} sx={{ animation: 'shimmer 1.4s infinite linear' }} />}
        <CardMedia
          component="img"
          image={recipe.image}
          alt={recipe.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          height={compact ? 140 : 170}
          sx={{ display: imgLoaded ? 'block' : 'none', objectFit: 'cover' }}
        />
        <IconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(recipe);
          }}
          aria-label={fav ? 'Remove from favorites' : 'Add to favorites'}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            bgcolor: 'background.paper',
            boxShadow: 2,
            '&:hover': { bgcolor: 'background.paper', transform: 'scale(1.1)' },
          }}
        >
          {fav ? <FavoriteRoundedIcon fontSize="small" color="error" /> : <FavoriteBorderRoundedIcon fontSize="small" />}
        </IconButton>

        {typeof matchPercent === 'number' && (
          <Chip
            label={`${matchPercent}% Match`}
            size="small"
            sx={{
              position: 'absolute',
              bottom: 10,
              left: 10,
              bgcolor: 'rgba(31,157,85,0.9)',
              color: '#fff',
              fontWeight: 700,
            }}
          />
        )}
        {!matchPercent && recipe.badges?.[0] && (
          <Chip
            label={recipe.badges[0]}
            size="small"
            sx={{
              position: 'absolute',
              bottom: 10,
              left: 10,
              bgcolor: BADGE_COLORS[recipe.badges[0]]?.bg || 'accent.greenSoft',
              color: BADGE_COLORS[recipe.badges[0]]?.color || 'primary.main',
              fontWeight: 700,
            }}
          />
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 0.75, pb: '16px !important' }}>
        <Typography variant="subtitle1" noWrap title={recipe.name} sx={{ fontWeight: 700 }}>
          {recipe.name}
        </Typography>

        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ color: 'text.secondary' }}>
          <Stack direction="row" spacing={0.4} alignItems="center">
            <AccessTimeRoundedIcon sx={{ fontSize: 15 }} />
            <Typography variant="caption">{recipe.cookTime} min</Typography>
          </Stack>
          <Stack direction="row" spacing={0.4} alignItems="center">
            <LocalFireDepartmentRoundedIcon sx={{ fontSize: 15 }} />
            <Typography variant="caption">{recipe.calories} kcal</Typography>
          </Stack>
          <Stack direction="row" spacing={0.3} alignItems="center" sx={{ ml: 'auto' }}>
            <StarRoundedIcon sx={{ fontSize: 16, color: '#F5A524' }} />
            <Typography variant="caption" sx={{ fontWeight: 700 }}>
              {recipe.rating}
            </Typography>
          </Stack>
        </Stack>

        {missingIngredients && missingIngredients.length > 0 && (
          <Typography variant="caption" sx={{ color: 'text.secondary' }} noWrap>
            Missing: {missingIngredients.slice(0, 3).join(', ')}
            {missingIngredients.length > 3 ? '…' : ''}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
