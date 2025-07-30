# Atom Builder - Advanced Simulation

This project is an advanced atom simulation platform built with the following stack:

- **UI Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion, GSAP
- **State Management:** Zustand (or Redux)
- **2D Physics:** Matter.js
- **3D Physics:** ammo.js
- **Custom Logic:** TypeScript
- **2D Render Engine:** Pixi.js or Konva.js
- **3D/Orbital Visuals:** Three.js, React Three Fiber
- **Vector Algebra:** gl-matrix
- **Code Quality:** ESLint, Prettier
- **Testing:** Vitest/Jest
- **Deployment:** Vercel/Netlify

## Project Structure

```
/src
  /components         → React UI components
  /simulation         → Physics & math logic
  /canvas             → Pixi or Three scene layers
  /hooks              → React hooks for logic
  /store              → Zustand/Redux for state
  /utils              → Math helpers, constants
  main.tsx
  App.tsx
```

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

## Customization

- Choose between Zustand or Redux for state management.
- Choose Pixi.js or Konva.js for 2D rendering.
- Extend simulation logic in `/src/simulation`.

---

For more details, see `.github/copilot-instructions.md`.
