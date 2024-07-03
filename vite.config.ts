import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';

const root = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "components": path.posix.join(root, 'components'),
      "routes": path.posix.join(root, 'routes'),
    },
  },
})
