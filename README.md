# 2025-group-19
2025 COMSM0166 group 19

## Demo Link

[PLAY HERE ▶️](https://uob-comsm0166.github.io/2025-group-19/)

# Table of Contents
- [1. Team Members](#1-team-members)
- [2. Introduction](#2-introduction)
- [3. Requirements](#3-requirements)
- [4. Design](#4-design)
- [5. Kanban](#5-kanban)
- [6. Implementation](#6-implementation)
- [7. Evaluation](#7-evaluation)
- [8. Process](#8-process)
- [9. Conclusion](#9-conclusion)
- [10. References](#10-references)
- [11. Weekly Assignments Preview](#11-weekly-assignments-preview)

---
# 1. Team Members

![groupPhoto](https://github.com/user-attachments/assets/ed444ef8-22ce-410e-9d05-1c2d5bb0d39b)

<div align="center">

| No.  | Name | Email | Role |
| :-: | :-: | :-: | :-: |
| 01 | Hsin-Hsien Ho (Erik) | fp24955@bristol.ac.uk | TBD |
| 02 | Mingqiao Fan (Daisy) | yi24612@bristol.ac.uk | TBD |
| 03 | Shinchuan Chen (Lucas) | wj24296@bristol.ac.uk | TBD |
| 04 | Yu-Jin Chen (Elle) | nj24628@bristol.ac.uk |TBD |
| 05 | Lee Areta | wb24440@bristol.ac.uk | TBD |
| 06 |Mikas Vong | tg24484@bristol.ac.uk | TBD |

</div>

---
# 2. Game Introduction

Our game is inspired by the classic brick breaker from the nostalgic era of 1999-2000 (Figure 1). However, we are not merely recreating the old classic—we are giving it a fresh, creative twist. The game incorporates six animals from the Chinese Zodiac, each representing a unique level. Players progress through these levels, collecting each animal as a reward, gaining a sense of achievement with every success.

Each level introduces a distinct visual theme and brick mechanism tailored to the animal it represents, offering new challenges and keeping the gameplay engaging. As players advance, the difficulty increases, putting their skills to the test through ball reflections, speed control, and precision. Additionally, we’ve integrated features such as multi-ball management and power-ups to further enhance the experience.

Are you ready to take on the challenge? Break the bricks, collect the Zodiac animals, and create your own brick-breaking legend!

<p align="center">
  <b>Figure 1</b><br>
  <i>Block</i><br>
  <img src="./assets/block-through.gif" width="500" alt="Block" style="border: 5px solid black;">
</p>

---
# 3. Requirements
## Early Stages design & Ideation process
| Game         | Gameplay Reference                                                                 | Mechanics                                                                                                                        |
|--------------|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| **Block** :purple_circle: | [Watch Gameplay](https://www.youtube.com/watch?v=aU1Hrpr2igM)                                            | - **Collision Detection for Bricks**: Detect ball collisions with bricks and adjust the ball's direction.                       <br> - **Managing Multiple Balls**: Track positions, directions, and speeds for multiple balls.                                   <br> - **Implementing Power-Ups**: Add power-ups like paddle enlargement, extra balls, or modified ball behavior.                 <br> - **Game Rendering and Performance**: Real-time rendering with optimization for multiple balls and bricks.                    <br> - **Game Logic and Level Design**: Create multiple levels with varying layouts and increasing difficulty.                    <br> - **Physics Simulation**: Simulate ball movement using velocity vectors and angle reflections.                                  |
| **Bombie** :bomb:          | [Watch Gameplay](https://www.youtube.com/watch?v=W5vcOb7laG0)                                            | - **Game Engine or Canvas**: Render the game scene on a canvas.                                                                 <br> - **Game Map Design**: Represent the map with a 2D array including destructible walls, indestructible walls, and empty spaces. <br> - **Character Controls**: Enable player movement and bomb placement.                                                     <br> - **Bomb and Explosion Logic**: Add bomb delay, explosion range, and wall destruction mechanics.                               <br> - **Enemy AI**: Enemies move randomly or track players, place bombs, and avoid explosions.                                      <br> - **Collision Detection**: Detect collisions between players, walls, bombs, and explosions.                                    <br> - **Game Progression and End Conditions**: Define objectives, game-over conditions, and progression rules.                       <br> - **Sound and Visual Effects**: Include explosion sounds, animations, and movement effects.                                     |
| **Temple Escape** :hindu_temple: | [Watch Gameplay](https://www.youtube.com/watch?v=eCpVc_ELSBk&list=PLEufPunsvT1cysv42S52Y6u59wxtlPb6j&index=1) | - **Character Movement**: Use swiping or arrow keys to move in straight lines, stopping only at walls.                           <br> - **Maze Design & Obstacles**: Design single-path mazes with traps, timed enemies, and walls that can stop characters.         <br> - **Location and Boundary Detection**: Track character interaction with collectables and traps.                                 <br> - **Power-ups & Outfits**: Add power-ups for extra lives or bonus points; provide outfits with unique perks.                     <br> - **Rendering**: Display only one map section at a time for smooth transitions between areas.                                     <br> - **Level Progression**: Define game end based on level count or story progression; reward points for stars, dots, and missions. |
| **Ladder Master** :ladder: | [Watch Gameplay](https://www.youtube.com/watch?v=OkTk5ky-GWc)                                            | - **2D Gameplay**: Simplify the original 3D concept to crossing a river instead of climbing walls.                               <br> - **Controls**: Move the character using arrow keys; optionally include obstacles or vary river widths.                        <br> - **Character Color Change**: Change the character's color by interacting with specific spots; make color changes random for difficulty. |
| **Level Devil** 😈 | [Watch Gameplay](https://www.youtube.com/watch?v=nn2EUssloa4)                                            | - **Deceptive Traps**: Hidden spikes, fake platforms, and paths that mislead players.                                            <br> - **Conditional Mechanics**: Triggers and elements like springboards behave differently based on player actions.            <br> - **Trial-and-Error Progression**: Players must memorize safe paths and solve puzzles through experimentation.                  <br> - **Dynamic Triggers**: Hidden switches alter the environment, activating platforms or deactivating traps.                      <br> - **Troll Design**: Misleading visual cues (e.g., fake doors or signs) challenge player patience and observation skills.         |


## User Stories

## Paper Prototype
<p align="center">
  <b>Figure 1</b><br>
  <i>Paper Prototype - Block</i><br>
  <img src="./assets/paper-prototype-block.gif" width="500" alt="Block" style="border: 5px solid black;">
</p>
---

# 4. Design
## Class Diagrams
## Sequence Diagram

---
# 5. Implementation

---
# 6. Evaluation
---
# 7. Process
## Zenhub Kanban

## Whimsical Wireframe
---
# 8. Conclusion

# 9. References


<div align="center">

| Name | Email | Role |
| :-: | :-: | :-: |
| Week 01 | Gaming Ideas | [Homework](https://github.com/UoB-COMSM0166/2025-group-19/blob/main/assignments/Week01/Readme.md) |
| Week 02 | p5.js Workshop | [Homework](https://github.com/UoB-COMSM0166/2025-group-19/blob/main/assignments/Week02/Readme.md) |
| Week 03 | Paper prototyping | [Homework](https://github.com/UoB-COMSM0166/2025-group-19/tree/main/assignments/Week03/Readme.md) <br> [Video Link 1](https://github.com/UoB-COMSM0166/2025-group-19/tree/main/assignments/Week03/ideas/block) <br> [Video Link 2](https://github.com/UoB-COMSM0166/2025-group-19/tree/main/assignments/Week03/ideas/level_devil) |
| Week 04 | Requirements | [Workshop](https://github.com/UoB-COMSM0166/2025-group-19/blob/main/assignments/Week04/Workshop.md) <br> [Homework](https://github.com/UoB-COMSM0166/2025-group-19/blob/main/assignments/Week04/Readme.md) |
| Week 05 | Object Orientated Design | [Homework](https://github.com/UoB-COMSM0166/2025-group-19/blob/main/assignments/Week05/Readme.md) |

</div>