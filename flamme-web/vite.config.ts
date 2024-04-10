import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    include: ['react-slick', 'slick-carousel'] // Inclua quaisquer outras bibliotecas necessárias aqui
  },
});
