# 2025-group-19
2025 COMSM0166 group 19

## Your Game

Link to your game [PLAY HERE](https://peteinfo.github.io/COMSM0166-project-template/)

Your game lives in the [/docs](/docs) folder, and is published using Github pages to the link above.

Include a demo video of your game here (you don't have to wait until the end, you can insert a work in progress video)

## Your Group

![groupPhoto](https://github.com/user-attachments/assets/ed444ef8-22ce-410e-9d05-1c2d5bb0d39b)

| Name | Email  | Role |
| -------- | -------- | -------- |
| Hsin-Hsien Ho (Erik) | fp24955@bristol.ac.uk | TBD |
| Mingqiao Fan (Daisy) | yi24612@bristol.ac.uk | TBD |
| Shinchuan Chen (Lucas) | wj24296@bristol.ac.uk | TBD |
| Yu-Jin Chen (Elle) | nj24628@bristol.ac.uk |TBD |
| Lee Areta | wb24440@bristol.ac.uk | TBD |
| Mikas Vong | tg24484@bristol.ac.uk | TBD |

## Game Research

### Block :purple_circle:
> Gameplay reference: [link](https://www.youtube.com/watch?v=aU1Hrpr2igM)

#### Game mechanics:
1. **Collision Detection for Bricks**
   - Check if the ball collides with any brick and ensure the ball's direction changes correctly based on the angle of collision
2. **Managing Multiple Balls**
   - Handle multiple balls simultaneously, correctly tracking each ball's position, direction, and speed
3. **Implementing Power-Ups**
   - Implement power-ups that impact the game state, such as paddle enlargement, adding more balls, or altering ball behavior
4. **Game Rendering and Performance**
   - Ensure real-time rendering of the game screen, especially with multiple balls and bricks, which may lead to performance bottlenecks
5. **Game Logic and Level Design**
   - Design multiple levels with varying brick layouts and gradually increasing difficulty
6. **Physics Simulation**
   - Simulate basic physical rules for ball movement, such as velocity vectors and angle reflections


### Bombie :bomb:
> Gameplay reference: [link](https://www.youtube.com/watch?v=W5vcOb7laG0)

#### Game mechanics:
1. **Game Engine or Canvas**
   - Set up a canvas to render the game scene
2. **Game Map Design**
   - Represent the map with a 2D array  
   - Include destructible walls, indestructible walls, and empty spaces
3. **Character Controls**
   - Player character movement control (up, down, left, right)
   - Player can place bombs and control their explosions
4. **Bomb and Explosion Logic**
   - Set bomb delay time and explosion range 
   - Explosions destroy destructible walls, enemies, or affect the player
5. **Enemy AI**
   - Enemies move randomly or track the player
   - Enemies set bombs and avoid the player's bombs
6. **Collision Detection**
   - Detect collisions between the player, walls, and bombs
   - Detect explosions with destructible items or the player
7. **Game Progression and End Conditions**
   - Set game objectives (e.g., eliminate all enemies, survive until time runs out)
   - Determine player death or game over conditions
8. **Sound and Visual Effects**
   - Add explosion sounds, character movement sounds, etc.  
   - Include animation effects (e.g., explosions, character actions)


### Temple Escape :hindu_temple:
> Gameplay reference: [link](https://www.youtube.com/watch?v=eCpVc_ELSBk&list=PLEufPunsvT1cysv42S52Y6u59wxtlPb6j&index=1)

#### Game mechanics:
1. **Character Movement**
   - Character an be controlled by swiping or arrow keys
   - Moves in a straight line and only stopping when you hit a wall
2. **Maze Design & Obstacles**
   - Note what walls can be stopped on
   - Ensure there is only one set path through each maze
   - How traps & enemies are timed, activated, and the amount of damage done to the character
3. **Location and Boundary Detection**
   - Follow where the character is and how it interacts with collectable & traps
4. **Power-ups & Outfits**
   - Power-ups either allow extra lives/protection against traps or give bonus points & coins
   - Each outfit gives a unique perk
5. **Rendering**
   - Only one section of the map shown at a time, so need to make sure that the player can travel between different sections without performance issues
6. **Level Progression**
   - For non-story based approach: end of game is determined by how many levels have been created
   - Points collected in each level determined by collection of stars and dots
   - Additional missions that give rewards based on completing quantifiable challenges


### Ladder Master :ladder:
> Gameplay reference: [link](https://www.youtube.com/watch?v=OkTk5ky-GWc)

> Game involves a character running forward and collecting ‘ladders’ so that it can climb up a wall (to progress in the game). The ‘ladders’ on the ground are in three different colors and the player has to make sure the character only collects ‘ladders’ that match the character’s color.

#### Game mechanics:
1. **2D**
   - The game is originally in 3D but we can modify it to crossing a river instead of climbing up a wall
2. **Controls**
   - Arrow keys movement of the character
   - Optional / put obstacles
   - Optional / make it more confusing for player - width of river can be varying, sometimes jumping across is sufficient, but if too wide - need long enough ladder
3. **Character Colour Change**
   - Color of the character can be changed by running through certain spots 
   - Optional / we can make this color change random to make it harder for the player

## Project Report

### Introduction

- 5% ~250 words 
- Describe your game, what is based on, what makes it novel? 

### Requirements 

- 15% ~750 words
- Use case diagrams, user stories. Early stages design. Ideation process. How did you decide as a team what to develop? 

### Design

- 15% ~750 words 
- System architecture. Class diagrams, behavioural diagrams. 

### Implementation

- 15% ~750 words

- Describe implementation of your game, in particular highlighting the three areas of challenge in developing your game. 

### Evaluation

- 15% ~750 words

- One qualitative evaluation (your choice) 

- One quantitative evaluation (of your choice) 

- Description of how code was tested. 

### Process 

- 15% ~750 words

- Teamwork. How did you work together, what tools did you use. Did you have team roles? Reflection on how you worked together. 

### Conclusion

- 10% ~500 words

- Reflect on project as a whole. Lessons learned. Reflect on challenges. Future work. 

### Contribution Statement

- Provide a table of everyone's contribution, which may be used to weight individual grades. We expect that the contribution will be split evenly across team-members in most cases. Let us know as soon as possible if there are any issues with teamwork as soon as they are apparent. 

### Additional Marks

You can delete this section in your own repo, it's just here for information. in addition to the marks above, we will be marking you on the following two points:

- **Quality** of report writing, presentation, use of figures and visual material (5%) 
  - Please write in a clear concise manner suitable for an interested layperson. Write as if this repo was publicly available.

- **Documentation** of code (5%)

  - Is your repo clearly organised? 
  - Is code well commented throughout?
