# Zodiac Catch

Zodiac Catch is a brick-breaking game built using p5.js, following the MVC (Model-View-Controller) architectural pattern. The game consists of multiple levels, power-ups, and dynamic ball-and-paddle interactions.

## Features
- Multi-level gameplay
- Power-up tools with effects (e.g., paddle size change, ball size change)
- Collision detection with paddle, bricks, and walls
- Score tracking and game-over handling

## Project Structure
```
code/
│
├── controllers/
│   ├── PageController.js
│   ├── StageController.js
│   └── stage/
│       ├── Stage01Controller.js
│       └── Stage02Controller.js
│
├── models/
│   ├── components/
│   │   ├── Ball.js
│   │   ├── Brick.js
│   │   ├── Paddle.js
│   │   └── Tool.js
│   ├── effect/
│   │   ├── Effect.js
│   │   ├── BallSizeEffect.js
│   │   └── PaddleSizeEffect.js
│   └── state/
│       └── StageState.js
│
├── views/
│   ├── WelcomeView.js
│   ├── StageMapView.js
│   ├── GameView.js
│   └── SidebarView.js
│
├── styles/
│   └── style.css
│
├── main.js
├── index.html
└── README.md
```

## Technologies
- JavaScript (ES6+)
- p5.js (https://p5js.org/)
- Node.js (for local server setup)

## Prerequisites
Ensure you have Node.js installed on your system.

## Setup
1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. Install a simple HTTP server package globally:
    ```bash
    npm install -g http-server
    ```

3. Start the local server:
    ```bash
    http-server
    ```

4. Open your browser and navigate to:
    ```
    http://localhost:8080
    ```

## Usage
- Navigate to the game start page.
- Select a stage to begin playing.
- Use the left and right arrow keys to move the paddle.
- Break bricks with the ball while preventing it from falling off the screen.
- Collect power-ups and achieve the highest score!

## Customization
- Modify `Stage01Controller.js` and `Stage02Controller.js` to create custom levels.
- Adjust `Ball.js`, `Paddle.js`, and `Brick.js` to fine-tune game mechanics.

## License
This project is licensed under the MIT License.
