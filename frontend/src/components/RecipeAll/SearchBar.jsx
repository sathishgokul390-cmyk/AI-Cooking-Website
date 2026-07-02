import React, { useEffect, useRef, useState } from 'react';
import {
  Paper,
  InputBase,
  IconButton,
  Popper,
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import { searchMealsByName } from '../../services/mealApi';

const RECENT_KEY = 'savory-recent-searches';

export default function SearchBar({ onResults, onQueryChange, placeholder = 'Search recipes, ingredients…' }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [recent, setRecent] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
    } catch {
      return [];
    }
  });
  const anchorRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    onQueryChange?.(query);
    if (!query.trim()) {
      setSuggestions([]);
      return undefined;
    }
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const results = await searchMealsByName(query);
        setSuggestions(results.slice(0, 6));
      } catch {
        setSuggestions([]);
      }
    }, 400); // debounced live search
    return () => clearTimeout(debounceRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const commitSearch = (term) => {
    const clean = term.trim();
    if (!clean) return;
    const updated = [clean, ...recent.filter((r) => r.toLowerCase() !== clean.toLowerCase())].slice(0, 6);
    setRecent(updated);
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
    setQuery(clean);
    setOpen(false);
    searchMealsByName(clean).then((res) => onResults?.(res, clean));
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box sx={{ position: 'relative', width: '100%' }} ref={anchorRef}>
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            px: 2,
            py: 0.5,
            borderRadius: 999,
            border: '1px solid',
            borderColor: 'divider',
            width: '100%',
          }}
        >
          <SearchRoundedIcon sx={{ color: 'text.secondary', mr: 1 }} fontSize="small" />
          <InputBase
            fullWidth
            placeholder={placeholder}
            value={query}
            onFocus={() => setOpen(true)}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') commitSearch(query);
            }}
            inputProps={{ 'aria-label': 'search recipes and ingredients' }}
            sx={{ py: 1 }}
          />
          {query && (
            <IconButton size="small" onClick={() => { setQuery(''); setSuggestions([]); onResults?.(null, ''); }} aria-label="clear search">
              <ClearRoundedIcon fontSize="small" />
            </IconButton>
          )}
        </Paper>

        <Popper
          open={open && (suggestions.length > 0 || (!query && recent.length > 0))}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          style={{ width: anchorRef.current?.offsetWidth, zIndex: 20 }}
        >
          <Paper elevation={6} sx={{ mt: 1, borderRadius: 3, overflow: 'hidden', maxHeight: 360, overflowY: 'auto' }}>
            {!query && recent.length > 0 && (
              <>
                <Typography variant="caption" sx={{ px: 2, pt: 1.5, display: 'block', color: 'text.secondary', fontWeight: 700 }}>
                  RECENT SEARCHES
                </Typography>
                <List dense>
                  {recent.map((r) => (
                    <ListItemButton key={r} onClick={() => commitSearch(r)}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <HistoryRoundedIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={r} />
                    </ListItemButton>
                  ))}
                </List>
              </>
            )}
            {suggestions.length > 0 && (
              <>
                {!query ? null : <Divider />}
                <List dense>
                  {suggestions.map((s) => (
                    <ListItemButton key={s.id} onClick={() => commitSearch(s.name)}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <RestaurantRoundedIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={s.name} secondary={s.category} />
                    </ListItemButton>
                  ))}
                </List>
              </>
            )}
          </Paper>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
}
