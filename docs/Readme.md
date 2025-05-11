# Zodiac Catch

**Zodiac Catch** is an engaging brick-breaking game built using **p5.js**, following the **Model-View-Controller (MVC)** architectural pattern. The game features multiple levels, dynamic ball-and-paddle interactions, and various power-ups that enhance gameplay.

## Features
- **Multi-level gameplay** with increasing difficulty
- **Power-ups** that alter gameplay (e.g., paddle size change, ball speed adjustment)
- **Real-time collision detection** with the paddle, bricks, and walls
- **Score tracking** and game-over mechanics

## Project Structure
```
code/
│
├── controllers/                     # Handles game logic and user interactions
│   ├── EffectController.js          # Controls power-up effects
│   ├── KeyboardController.js        # Manages keyboard input for paddle movement
│   ├── PageController.js            # Controls page navigation
│   ├── StageController.js           # Manages overall stage logic
│   ├── SoundController.js           # Manages sound logic
│   └── stage/                       # Specific controllers for each stage
│       ├── Stage01Controller.js
│       ├── Stage02Controller.js
│       └── ...
│
├── data/                            # Defines game text
│   └── *.json
|
├── models/                          # Defines game objects and behaviours
│   ├── components/                  # Defines core game objects
│   │   ├── Ball.js                  # Ball properties and behaviour
│   │   ├── Brick.js                 # Brick properties and collision logic
│   │   ├── Paddle.js                # Paddle movement and interaction
│   │   ├── Tool.js                  # Power-up item behaviour
│   │   └── StagePattern/            # Defines the pixel-based layout of bricks for each stage
│   │       └── *.json
│   ├── effect/                      # Defines different power-up effects
│   │   ├── Effect.js                # Base class for all effects
│   │   ├── BallInfiniteEffect.js    # Grants infinite balls
│   │   ├── BallSizeEffect.js        # Changes ball size
│   │   ├── BallSpeedEffect.js       # Alters ball speed
│   │   ├── GravityEffect.js         # Modifies gravity influence
│   │   ├── PaddleDirectionEffect.js # Reverses paddle controls
│   │   ├── PaddleSizeEffect.js      # Adjusts paddle size
│   │   └── TimeEffect.js            # Affects game time
│   ├── special/                     # Defines brick-specific effects
│   │   └── BlackHoleEffect.js       # Creates a black hole effect on bricks
│   └── state/                       # Manages stage states
│       └── StageState.js            # Tracks stage progression and status
│
├── views/                           # Handles visual rendering
│   ├── GameView.js                  # Renders the game screen
│   ├── GodView.js                   # Developer mode for debugging
│   ├── ModeView.js                  # Displays different game modes
│   ├── NewStageMapView.js           # Handles new stage creation view
│   ├── SidebarView.js               # Displays game sidebar and stats
│   ├── StageMapView.js              # Renders the stage map
│   ├── WelcomeView.js               # Welcome screen UI
│   └── YourZodiacView.js            # Zodiac-themed game view
│
├── styles/                          # CSS styles for the game
│   └── style.css
│
├── main.js                          # Initializes the game
├── index.html                       # Main entry point
└── README.md                        # Game documentation
```

## Technologies Used
- **JavaScript (ES6+)**
- **p5.js** ([p5js.org](https://p5js.org/))
- **Node.js** (for local server setup)

## Prerequisites
Ensure you have **Node.js** installed on your system.

## Setup Instructions
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

## How to Play
- Navigate to the game start page.
- Select a stage to begin playing.
- Use the **left** and **right arrow keys** to move the paddle.
- **Break bricks** with the ball while preventing it from falling off the screen.
- **Collect power-ups** to gain advantages and achieve the highest score!

## Customization
- Modify `Stage01Controller.js` and `Stage02Controller.js` to create custom levels.
- Adjust `Ball.js`, `Paddle.js`, and `Brick.js` to fine-tune game mechanics.
- Edit **StagePattern JSON files** to define unique brick arrangements for different stages.

Enjoy the game and challenge yourself to master **Zodiac Catch**!

