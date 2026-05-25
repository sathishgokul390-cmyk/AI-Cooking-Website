import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';
import PanLoader from './components/PanLoader/PanLoader';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}
