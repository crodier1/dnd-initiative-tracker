# Initiative Tracker

[Click Here to Load the Page](https://enchanting-sprite-5dd660.netlify.app/)

* Keeping track of initiative is annoying, but it just got easier!
* Keep track of initative for any turn-based role playing game!
* Automatically pushes up highest initiative to the top!
* Keep track of the most important info for your encounters!
* Automatically saves your initiative order to your computer!

## Installation

- Prerequisites:
  - Node.js (v18+ recommended)
  - npm (bundled with Node.js)

- Install all dependencies:
```bash
npm ci
```
(If `npm ci` fails or you don't have a lockfile, use `npm install`.)

- What gets installed (from `package.json`):
  - Runtime dependencies:
    - @dnd-kit/core ^6.0.8
    - @dnd-kit/sortable ^7.0.2
    - @dnd-kit/utilities ^3.2.1
    - bootstrap ^5.2.3
    - react ^18.2.0
    - react-bootstrap ^2.7.4
    - react-dnd ^16.0.1
    - react-dnd-html5-backend ^16.0.1
    - react-dom ^18.2.0
  - Dev dependencies:
    - @types/react ^18.0.28
    - @types/react-dom ^18.0.11
    - @vitejs/plugin-react ^3.1.0
    - vite ^4.2.0

## Run Locally

- Start the development server:
```bash
npm run dev
```

- Open the app in your browser:
```bash
http://localhost:5173
```

- If port 5173 is busy, you can specify another port:
```bash
npm run dev -- --port 5174
```