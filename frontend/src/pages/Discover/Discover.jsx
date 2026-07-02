import React, { useEffect, useState, useMemo } from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Paper,
  IconButton,
  Tooltip,
  Alpha,
} from '@mui/material';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import Sidebar, { CATEGORIES } from './Sidenav/Sidenav';
import SearchBar from '../../components/RecipeAll/SearchBar';
import FoodTypeScroller from '../../components/RecipeAll/FoodTypeScroller';
import RecipeGrid from '../../components/RecipeAll/RecipeGrid';
import IngredientsPanel from '../../components/ingredients/IngredientsPanel';
import RecipesYouCanMake from '../../components/ingredients/RecipesYouCanMake';
import { fetchCategoryRecipes, fetchFoodTypeRecipes } from '../../services/mealApi';

export default function Discover() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Explicit, rigorous breakpoint evaluation requested by user
  const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:359px)');
  const isStandardMobile = useMediaQuery('(min-width:360px) and (max-width:767px)');
  const isMobile = useMediaQuery('(max-width:767px)');
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1023px)');
  const isDesktop = useMediaQuery('(min-width:1024px)');

  const [category, setCategory] = useState('all');
  const [foodType, setFoodType] = useState('all');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let active = true;
    setLoading(true);
    setSearchResults(null);

    const loader = foodType !== 'all'
      ? fetchFoodTypeRecipes(foodType)
      : fetchCategoryRecipes(category);

    loader
      .then((res) => active && setRecipes(res))
      .catch(() => active && setRecipes([]))
      .finally(() => active && setLoading(false));

    return () => { active = false; };
  }, [category, foodType]);

  const categoryLabel = useMemo(() => {
    return CATEGORIES.find((c) => c.key === category)?.label || 'All Recipes';
  }, [category]);

  const displayedRecipes = searchResults !== null ? searchResults : recipes;
  
  const sectionTitle = searchResults !== null
    ? `Results for "${searchQuery}"`
    : category === 'trending' ? 'Trending Recipes' : categoryLabel;

  // Ultra-modern variables mapping professional surfaces
  const surfaces = useMemo(() => ({
    bg: isDark ? '#0b0f17' : '#f4f7f6',
    cardBg: isDark ? 'rgba(22, 28, 45, 0.7)' : 'rgba(255, 255, 255, 0.85)',
    border: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)',
    primary: isDark ? '#4ade80' : '#1b5e20',
    primaryGloss: isDark ? 'rgba(74, 222, 128, 0.08)' : 'rgba(27, 94, 32, 0.04)',
    textPrimary: isDark ? '#f3f4f6' : '#1e293b',
    textSecondary: isDark ? '#9ca3af' : '#64748b',
    shadow: isDark 
      ? '0 4px 30px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.05)' 
      : '0 10px 30px rgba(0, 0, 0, 0.02), 0 1px 3px rgba(0, 0, 0, 0.01)',
  }), [isDark]);

  const sidebarWidth = isDesktop ? 260 : isTablet ? 80 : 0;

  // High level component abstraction mapping a glassmorphic dashboard block
  const renderPremiumCard = (children, extraSx = {}) => (
    <Paper
      elevation={0}
      sx={{
        bgcolor: surfaces.cardBg,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${surfaces.border}`,
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: surfaces.shadow,
        transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease',
        ...extraSx,
      }}
    >
      {children}
    </Paper>
  );

  return (
    <Box
      sx={{
        bgcolor: surfaces.bg,
        minHeight: '100vh',
        width: '100%',
        px: isSmallMobile ? 1.5 : isStandardMobile ? 2.5 : isTablet ? 4 : 6,
        py: isMobile ? 3 : 5,
        transition: 'background-color 0.4s ease',
      }}
    >
      <Box sx={{ display: 'flex', gap: isMobile ? 2 : 4, alignItems: 'flex-start', maxWidth: '1600px', mx: 'auto' }}>
        
        {/* ── Modern Navigation Sidebar Sidebar Mount ── */}
        {(isTablet || isDesktop) && (
          <Box sx={{ flexShrink: 0, width: sidebarWidth, position: 'sticky', top: 40 }}>
            <Sidebar
              selected={category}
              onSelect={(key) => { setCategory(key); setFoodType('all'); }}
            />
          </Box>
        )}
        {isMobile && (
          <Sidebar
            selected={category}
            onSelect={(key) => { setCategory(key); setFoodType('all'); }}
          />
        )}

        {/* ── Canvas Viewport Grid Container ── */}
        <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: isMobile ? 2.5 : 4 }}>
          
          {/* ── 1. Hero Area Block ── */}
          {renderPremiumCard(
            <Box sx={{ p: isSmallMobile ? 2.5 : isStandardMobile ? 3 : 4 }}>
              <Stack
                direction={isMobile ? 'column' : 'row'}
                justifyContent="space-between"
                alignItems={isMobile ? 'flex-start' : 'center'}
                gap={3}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 900,
                      fontSize: isSmallMobile ? 22 : isStandardMobile ? 26 : isTablet ? 32 : 38,
                      color: surfaces.textPrimary,
                      lineHeight: 1.15,
                      letterSpacing: '-0.8px',
                    }}
                  >
                    Discover{' '}
                    <Box component="span" sx={{ 
                      color: surfaces.primary,
                      background: isDark ? 'linear-gradient(90deg, #FB923C, #FB923C)' : 'linear-gradient(90deg, #1b5e20, #2e7d32)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Delicious
                    </Box>
                    {' '}Recipes 🌿
                  </Typography>
                  <Typography
                    sx={{ color: surfaces.textSecondary, mt: 1, fontSize: isSmallMobile ? 12 : 14, fontWeight: 500, letterSpacing: '-0.1px' }}
                  >
                    Explore a world of healthy &amp; tasty recipes handpicked for you
                  </Typography>
                </Box>

                <Stack
                  direction="row"
                  gap={2}
                  sx={{ width: isMobile ? '100%' : 460, flexShrink: 0 }}
                >
                  <SearchBar
                    onResults={(res, term) => { setSearchResults(res); setSearchQuery(term); }}
                    onQueryChange={(q) => { if (!q) setSearchResults(null); }}
                  />
                  <Button
                    variant="outlined"
                    startIcon={<TuneRoundedIcon />}
                    sx={{
                      display: isSmallMobile ? 'none' : 'inline-flex',
                      borderRadius: '16px',
                      borderColor: surfaces.border,
                      color: surfaces.textPrimary,
                      px: 3,
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: '14px',
                      letterSpacing: '-0.1px',
                      flexShrink: 0,
                      transition: 'all 0.2s',
                      '&:hover': { 
                        borderColor: surfaces.primary, 
                        bgcolor: surfaces.primaryGloss,
                        transform: 'translateY(-1px)'
                      },
                    }}
                  >
                    Filters
                  </Button>
                </Stack>
              </Stack>
            </Box>
          )}

          {/* ── 2. Carousel Category Pill Strip (Mobile View Only) ── */}
          {isMobile && (
            <Box
              sx={{
                display: 'flex',
                gap: 1.5,
                overflowX: 'auto',
                pb: 1,
                px: 0.5,
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
              }}
            >
              {CATEGORIES.map((c) => {
                const active = category === c.key;
                return (
                  <Button
                    key={c.key}
                    size="small"
                    onClick={() => { setCategory(c.key); setFoodType('all'); }}
                    variant={active ? 'contained' : 'outlined'}
                    sx={{
                      borderRadius: '14px',
                      flexShrink: 0,
                      fontWeight: 600,
                      fontSize: isSmallMobile ? 12 : 13,
                      textTransform: 'none',
                      px: 2.5,
                      py: 1,
                      boxShadow: active ? '0 4px 12px rgba(74, 222, 128, 0.2)' : 'none',
                      ...(active
                        ? { bgcolor: surfaces.primary, '&:hover': { bgcolor: surfaces.primary } }
                        : { borderColor: surfaces.border, color: surfaces.textSecondary, '&:hover': { borderColor: surfaces.primary, bgcolor: surfaces.primaryGloss } }),
                    }}
                  >
                    {c.label}
                  </Button>
                );
              })}
            </Box>
          )}

          {/* ── 3. Food Type Horizontal Carousel Scroller ── */}
          {renderPremiumCard(
            <Box sx={{ px: isMobile ? 2.5 : 4, py: isMobile ? 2 : 3 }}>
              <FoodTypeScroller selected={foodType} onSelect={setFoodType} />
            </Box>
          )}

          {/* ── 4. Main Recipe Display Grid ── */}
          {renderPremiumCard(
            <Box sx={{ p: isMobile ? 2.5 : 4 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 3.5 }}
              >
                <Stack direction="row" alignItems="center" gap={1.25}>
                  {category === 'trending' && (
                    <LocalFireDepartmentRoundedIcon sx={{ color: '#ff6b00', fontSize: 24 }} />
                  )}
                  <Typography
                    sx={{
                      fontWeight: 900,
                      color: surfaces.textPrimary,
                      fontSize: isMobile ? 17 : 20,
                      letterSpacing: '-0.4px',
                    }}
                  >
                    {sectionTitle}
                  </Typography>
                </Stack>
                {searchResults === null && (
                  <Button
                    endIcon={<ArrowForwardRoundedIcon />}
                    size="small"
                    sx={{
                      color: surfaces.primary,
                      fontWeight: 700,
                      fontSize: 14,
                      textTransform: 'none',
                      letterSpacing: '-0.1px',
                      borderRadius: '10px',
                      px: 1.5,
                      '&:hover': { bgcolor: surfaces.primaryGloss },
                    }}
                  >
                    View all
                  </Button>
                )}
              </Stack>

              <RecipeGrid
                recipes={displayedRecipes}
                loading={loading}
                emptyTitle="No recipes found"
                emptySubtitle="Try a different category or search term."
              />
            </Box>
          )}

          {/* ── 5. AI Kitchen Workspace (Ingredients Panel + Matches) ── */}
          {renderPremiumCard(
            <Box 
              sx={{ 
                p: isMobile ? 2.5 : 4, 
                position: 'relative',
                background: isDark 
                  ? 'radial-gradient(circle at 0% 0%, rgba(74,222,128,0.03) 0%, transparent 50%)'
                  : 'radial-gradient(circle at 0% 0%, rgba(27,94,32,0.02) 0%, transparent 50%)'
              }}
            >
              <Grid container spacing={isMobile ? 4 : 5} alignItems="stretch">
                <Grid size={{ xs: 12, lg: 5 }}>
                  <IngredientsPanel />
                </Grid>

                {/* Conceptual Middle Intermediary Workspace Arrow Indicator */}
                {!isMobile && (
                  <Grid size={{ lg: 1 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Stack alignItems="center" spacing={1}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '16px',
                          border: `1px solid ${surfaces.border}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: isDark ? 'rgba(255,255,255,0.02)' : '#fff',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                          color: surfaces.primary,
                        }}
                      >
                        <AutoAwesomeRoundedIcon sx={{ fontSize: 20 }} />
                      </Box>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: surfaces.textSecondary, 
                          fontWeight: 700, 
                          whiteSpace: 'nowrap',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          fontSize: '10px'
                        }}
                      >
                        Analyzing
                      </Typography>
                    </Stack>
                  </Grid>
                )}

                <Grid size={{ xs: 12, lg: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <RecipesYouCanMake limit={4} />
                </Grid>
              </Grid>
            </Box>
          )}

        </Box>
      </Box>
    </Box>
  );
}