import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
<<<<<<< HEAD
      base: "/FoodEat/","git@github.com:mehdiselmi/FoodEat.git"

=======
    base: "/FoodEat/","FoodEat":"git@github.com:mehdiselmi/FoodEat.git"
>>>>>>> e32adcd (Add build files for GitHub Pages)
})
