# Maze Game React

A 3-level maze game built with React.js

## How to Run

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to play the game

## How to Play

- Use **W** (up), **A** (left), **S** (down), **D** (right) to move your yellow square
- Navigate to the red square to complete each level
- Complete all 3 levels to see a surprise!

## Game Features

- 3 progressively harder levels (10x10 → 15x15 → 20x20)
- WASD movement controls
- Victory modal after completing all levels
- Jump scare surprise at the end!

## Project Structure

```
maze-game-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MazeCanvas.js
│   │   ├── MazeCanvas.css
│   │   ├── Modal.js
│   │   ├── Modal.css
│   │   ├── JumpScare.js
│   │   └── JumpScare.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```
