import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // this tells Vite that the root is the current folder
  server: {
    port: 5173,
  },
});
