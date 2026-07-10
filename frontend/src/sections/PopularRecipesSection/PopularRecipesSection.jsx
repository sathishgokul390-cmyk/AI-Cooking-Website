import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  IconButton, 
  Chip 
} from '@mui/material';
import { 
  ArrowBack as ArrowLeftIcon, 
  ArrowForward as ArrowRightIcon, 
  FavoriteBorder as HeartIconOutline,
  Favorite as HeartIconFilled,
  LocalFireDepartment as CalorieIcon
} from '@mui/icons-material';

// PopularRecipesSection image
import GrilledSalmon from "../../assets/images/PopularRecipes/GrilledSalmon.jpg";
import CreamyChickenPasta from "../../assets/images/PopularRecipes/CreamyChickenPasta.jpg";
import QuinoaSaladBowl from "../../assets/images/PopularRecipes/QuinoaSaladBowl.jpg";
import SpicyRamenNoodles from "../../assets/images/PopularRecipes/SpicyRamenNoodles.webp";
import ChocolateAvocadoMousse from "../../assets/images/PopularRecipes/ChocolateAvocadoMousse.jpg";
import MangoChiaPudding from "../../assets/images/PopularRecipes/MangoChiaPudding.jpg"

const FOOD_RECIPES = [
  { id: 1, title: "Grilled Salmon with Avocado Salsa", time: "25 min", calories: "520 kcal", isTrending: true, image: GrilledSalmon },
  { id: 2, title: "Creamy Chicken Pasta", time: "30 min", calories: "610 kcal", isTrending: false, image: CreamyChickenPasta },
  { id: 3, title: "Quinoa Salad Bowl", time: "20 min", calories: "420 kcal", isTrending: false, image: QuinoaSaladBowl },
  { id: 4, title: "Spicy Ramen Noodles", time: "15 min", calories: "480 kcal", isTrending: false, image: SpicyRamenNoodles },
  { id: 5, title: "Chocolate Avocado Mousse", time: "10 min", calories: "320 kcal", isTrending: false, image: ChocolateAvocadoMousse },
  { id: 6, title: "Mango Chia Pudding", time: "8 min", calories: "250 kcal", isTrending: false, image: MangoChiaPudding }
];

const INFINITE_SLIDES = [...FOOD_RECIPES, ...FOOD_RECIPES, ...FOOD_RECIPES];

const PopularRecipesSection = () => {
  const scrollContainerRef = useRef(null);
  const autoScrollRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const CARD_WIDTH_DESKTOP = 360; 
  const CARD_WIDTH_MOBILE = 280;  
  const GAP_SPACING = 16;

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const isMobile = window.innerWidth < 600;
      const initialCardWidth = (isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP) + GAP_SPACING;
      container.scrollLeft = initialCardWidth * FOOD_RECIPES.length;
    }
  }, []);

  useEffect(() => {
    if (!isInteracting) {
      autoScrollRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft += 1;
        }
      }, 25);
    }
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [isInteracting]);

  const handleScrollResetLoop = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const isMobile = container.clientWidth < 600;
    const currentCardWidth = (isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP) + GAP_SPACING;
    const sequenceTotalWidth = currentCardWidth * FOOD_RECIPES.length;

    if (container.scrollLeft >= sequenceTotalWidth * 2) {
      container.scrollLeft -= sequenceTotalWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += sequenceTotalWidth;
    }
  };

  const handleArrowNavigation = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsInteracting(true);
    const isMobile = container.clientWidth < 600;
    const currentCardWidth = (isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP) + GAP_SPACING;
    const shiftDistance = direction === 'left' ? -currentCardWidth : currentCardWidth;

    container.scrollTo({
      left: container.scrollLeft + shiftDistance,
      behavior: 'smooth'
    });

    setTimeout(() => {
      setIsInteracting(false);
    }, 750);
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <Box sx={{ 
      width: '100%', 
      py: 4, 
      px: { xs: 2, sm: 4, md: 6 }, 
      bgcolor: '#FAF9F6',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Header Container Area */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 3,
        maxWidth: 1400,
        mx: 'auto'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box component="span" sx={{ color: '#FF4F24', fontSize: '1.4rem' }}>✦</Box>
          <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1A1A1A', fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
            Popular Recipes
          </Typography>
        </Box>
        
        {/* Navigation Control Buttons Placed in Header Box for All Viewports */}
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <IconButton 
            onClick={() => handleArrowNavigation('left')}
            sx={{
              bgcolor: '#FFFFFF', color: '#1A1A1A', 
              boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
              transition: 'all 0.2s ease', borderRadius: '50%', p: { xs: 0.8, sm: 1.2 },
              '&:hover': { bgcolor: '#FF4F24', color: '#FFFFFF' }
            }}
          >
            <ArrowLeftIcon fontSize="small" />
          </IconButton>

          <IconButton 
            onClick={() => handleArrowNavigation('right')}
            sx={{
              bgcolor: '#FFFFFF', color: '#1A1A1A', 
              boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
              transition: 'all 0.2s ease', borderRadius: '50%', p: { xs: 0.8, sm: 1.2 },
              '&:hover': { bgcolor: '#FF4F24', color: '#FFFFFF' }
            }}
          >
            <ArrowRightIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Interactive Deck Area */}
      <Box sx={{ position: 'relative', maxWidth: 1400, mx: 'auto' }}>
        
        {/* Horizontal Scroll Track */}
        <Box
          ref={scrollContainerRef}
          onScroll={handleScrollResetLoop}
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => setIsInteracting(false)}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollbarWidth: 'none', 
            '&::-webkit-scrollbar': { display: 'none' }, 
            gap: `${GAP_SPACING}px`,
            py: 2,
            px: { xs: 0.5, sm: 0 },
            scrollBehavior: 'auto',
            cursor: 'grab',
            '&:active': { cursor: 'grabbing' }
          }}
        >
          {INFINITE_SLIDES.map((recipe, index) => {
            const isFavorite = wishlist.includes(recipe.id);
            return (
              <Card
                key={`${recipe.id}-${index}`}
                sx={{
                  borderRadius: '24px',
                  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  width: { xs: `${CARD_WIDTH_MOBILE}px`, sm: `${CARD_WIDTH_DESKTOP}px` },
                  minWidth: { xs: `${CARD_WIDTH_MOBILE}px`, sm: `${CARD_WIDTH_DESKTOP}px` },
                  maxWidth: { xs: `${CARD_WIDTH_MOBILE}px`, sm: `${CARD_WIDTH_DESKTOP}px` },
                  height: '240px',
                  '&:hover': {
                    transform: 'translateY(-6px)'
                  }
                }}
              >
                <Box sx={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image={recipe.image}
                    alt={recipe.title}
                    sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
                  />

                  {/* Dark Gradient Veil Mask Overlay */}
                  <Box 
                    sx={{
                      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.85) 100%)',
                      zIndex: 1
                    }}
                  />

                  {/* Trending Label Badge Overlay */}
                  {recipe.isTrending && (
                    <Chip
                      icon={<CalorieIcon sx={{ fill: '#FFFFFF !important', fontSize: '12px' }} />}
                      label="Trending"
                      sx={{
                        position: 'absolute', top: 14, left: 14, zIndex: 2,
                        bgcolor: '#FF4F24', color: '#FFFFFF', fontWeight: 700, fontSize: '10px',
                        textTransform: 'uppercase', height: '22px', borderRadius: '6px',
                        '& .MuiChip-label': { px: 1 }, '& .MuiChip-icon': { ml: '4px', mr: '-4px' }
                      }}
                    />
                  )}

                  {/* Wishlist Heart Button Overlay */}
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation(); 
                      toggleWishlist(recipe.id);
                    }}
                    sx={{
                      position: 'absolute', top: 14, right: 14, zIndex: 5,
                      bgcolor: isFavorite ? '#FFFFFF' : 'rgba(255,255,255,0.2)', 
                      backdropFilter: isFavorite ? 'none' : 'blur(8px)',
                      color: isFavorite ? '#FF4F24' : '#FFFFFF', 
                      p: '8px', borderRadius: '50%',
                      transition: 'all 0.2s ease',
                      boxShadow: isFavorite ? '0px 4px 10px rgba(255, 79, 36, 0.3)' : 'none',
                      '&:hover': { bgcolor: '#FFFFFF', color: '#FF4F24' }
                    }}
                  >
                    {isFavorite ? <HeartIconFilled sx={{ fontSize: '18px' }} /> : <HeartIconOutline sx={{ fontSize: '18px' }} />}
                  </IconButton>

                  {/* Content Block */}
                  <CardContent sx={{ 
                    position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
                    p: '16px !important', display: 'flex', flexDirection: 'column', gap: 1
                  }}>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        fontWeight: 700, lineHeight: 1.2, 
                        fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#FFFFFF',
                        textShadow: '0px 1px 2px rgba(0,0,0,0.5)', overflow: 'hidden',
                        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {recipe.title}
                    </Typography>

                    {/* Horizontal Metadata String Alignments */}
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                      <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '11px', color: 'rgba(255,255,255,0.85)' }}>{recipe.time}</Typography>
                      <Box sx={{ width: '3px', height: '3px', bgcolor: 'rgba(255,255,255,0.5)', borderRadius: '50%' }} />
                      <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '11px', color: 'rgba(255,255,255,0.85)' }}>{recipe.calories}</Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            );
          })}
        </Box>

      </Box>
    </Box>
  );
};

export default PopularRecipesSection;