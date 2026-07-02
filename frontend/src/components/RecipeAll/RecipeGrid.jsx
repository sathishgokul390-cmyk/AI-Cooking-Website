import React from 'react';
import { Grid, Skeleton, Box, Typography, Stack, useTheme } from '@mui/material';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import RecipeCard from './RecipeCard';

export default function RecipeGrid({ recipes, loading, emptyTitle, emptySubtitle, getMatch, getMissing }) {
  const theme = useTheme();
  const border = theme.palette.divider;
  const cardBg = theme.palette.background.paper;

  if (loading) {
    return (
      <Grid container spacing={{ xs: 1.5, md: 2 }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <Box sx={{ borderRadius: 3, overflow: 'hidden', border: `1px solid ${border}`, bgcolor: cardBg }}>
              <Skeleton variant="rectangular" height={160} animation="wave" />
              <Box sx={{ p: 1.5 }}>
                <Skeleton width="80%" height={18} animation="wave" sx={{ mb: 0.75 }} />
                <Skeleton width="55%" height={14} animation="wave" />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  }

  if (!recipes || recipes.length === 0) {
    return (
      <Stack alignItems="center" gap={1.5} sx={{ py: 7, textAlign: 'center' }}>
        <SentimentSatisfiedAltRoundedIcon sx={{ fontSize: 48, color: '#3a7d44', opacity: 0.5 }} />
        <Typography sx={{ fontWeight: 700, color: theme.palette.text.primary, fontSize: 16 }}>
          {emptyTitle || 'No recipes found'}
        </Typography>
        <Typography sx={{ maxWidth: 360, color: theme.palette.text.secondary, fontSize: 13 }}>
          {emptySubtitle || 'Try a different search term or add a few more ingredients.'}
        </Typography>
      </Stack>
    );
  }

  return (
    <Grid container spacing={{ xs: 1.5, md: 2 }}>
      {recipes.map((r, idx) => (
        <Grid
          item xs={12} sm={6} md={4} lg={3}
          key={r.id}
          sx={{
            animation: `fadeInUp 0.3s ease ${Math.min(idx * 0.03, 0.3)}s both`,
            '@keyframes fadeInUp': {
              from: { opacity: 0, transform: 'translateY(12px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Box sx={{
            borderRadius: 3,
            overflow: 'hidden',
            border: `1px solid ${border}`,
            bgcolor: cardBg,
            height: '100%',
            transition: 'box-shadow 0.22s ease, transform 0.22s ease, background-color 0.25s ease',
            '&:hover': {
              boxShadow: '0 8px 24px rgba(0,0,0,.12)',
              transform: 'translateY(-4px)',
            },
          }}>
            <RecipeCard
              recipe={r}
              matchPercent={getMatch ? getMatch(r) : undefined}
              missingIngredients={getMissing ? getMissing(r) : undefined}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
