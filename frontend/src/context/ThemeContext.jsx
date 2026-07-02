import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from '@mui/material';

/* ─── Context ─────────────────────────────────────────────────────────────── */
const ThemeContext = createContext({ darkMode: false, toggleTheme: () => {} });

export const useThemeMode = () => useContext(ThemeContext);

/* ─── Helper: read initial dark preference ────────────────────────────────── */
function getInitialDark() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch {
    return false;
  }
}

/* ─── Provider ────────────────────────────────────────────────────────────── */
export function AppThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(getInitialDark);

  /* Sync html.dark class on every change (keeps Tailwind in sync) */
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  /* MUI theme — both mode + custom palette so every MUI component responds */
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: { main: '#3a7d44', light: '#5a9e64', dark: '#2d6235' },
          background: {
            default: darkMode ? '#0f1117' : '#f4f6f8',
            paper:   darkMode ? '#1a1d23' : '#ffffff',
          },
          text: {
            primary:   darkMode ? '#f3f4f6' : '#111827',
            secondary: darkMode ? '#9ca3af' : '#6b7280',
          },
          divider: darkMode ? 'rgba(255,255,255,0.08)' : '#e8eaed',
        },
        shape: { borderRadius: 12 },
        typography: {
          fontFamily: 'Inter, system-ui, sans-serif',
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
                transition: 'background-color 0.25s ease, border-color 0.25s ease',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: { backgroundImage: 'none' },
            },
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
