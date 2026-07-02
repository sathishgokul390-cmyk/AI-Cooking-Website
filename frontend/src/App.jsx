import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';
import PanLoader from './components/PanLoader/PanLoader';
import { AuthProvider } from './context/AuthContext';
import { AppThemeProvider } from './context/ThemeContext';
import { IngredientsProvider } from './components/context/IngredientsContext';
import { FavoritesProvider } from './components/context/FavoritesContext';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <AppThemeProvider>
      <AuthProvider>
        <IngredientsProvider>
          <FavoritesProvider>
            <AnimatePresence>
              {loading && (
                <PanLoader key="pan-loader" onComplete={() => setLoading(false)} />
              )}
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: loading ? 0 : 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <AppRoutes />
            </motion.div>
          </FavoritesProvider>
        </IngredientsProvider>
      </AuthProvider>
    </AppThemeProvider>
  );
}
