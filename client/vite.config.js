import replace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    replace({
      'process.env.VITE_PRIVATE_KEY': JSON.stringify(process.env.PRIVATE_KEY),
      'process.env.VITE_CONTRACT_ADDRESS': JSON.stringify(
        process.env.CONTRACT_ADDRESS
      ),
    }),
  ],
  define: {
    global: 'globalThis',
    'process.env': {},
  },
});
