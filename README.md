# 2025-group-19
2025 COMSM0166 group 19

# Our Game - ZODIAC CATCH

<p align="center">
    <img src="./assets/zodiac-catch.gif" width="1000" alt="Block" style="border: 5px solid black;">
</p>

## Link

[PLAY HERE ▶️](https://uob-comsm0166.github.io/2025-group-19/) <br>
[Weekly Assignment 📚](https://github.com/UoB-COMSM0166/2025-group-19/blob/main/assignments/Readme.md)

# Table of Contents
- [Team Members](#team-members)
- [Introduction](#introduction)
- [Requirements](#requirements)
- [Design](#design)
- [Implementation](#implementation)
- [Evaluation](#evaluation)
- [Process](#process)
- [Conclusion](#conclusion)
- [References](#references)

---
# Team Members

![groupPhoto](https://github.com/user-attachments/assets/ed444ef8-22ce-410e-9d05-1c2d5bb0d39b)

<div align="center">

| No.  | Name | Email | Role | 
| :-: | :-: | :-: | :-: |
| 01 | Hsin-Hsien Ho (Erik) | fp24955@bristol.ac.uk | `Developer` |
| 02 | Mingqiao Fan (Daisy) | yi24612@bristol.ac.uk | `Developer` |
| 03 | Shinchuan Chen (Lucas) | wj24296@bristol.ac.uk | `Developer` |
| 04 | Yu-Jin Chen (Elle) | nj24628@bristol.ac.uk | `Developer` |
| 05 | Lee Areta | wb24440@bristol.ac.uk | `Developer` |
| 06 |Mikas Vong | tg24484@bristol.ac.uk | `Developer` |

</div>

---
# Introduction

A fresh take on the beloved brick breaker, our game was inspired by and pays homage to the genre’s rich history that spans titles such as the original Breakout by Atari and Block.

<p align="center">
  <b>Figure 1</b><br>
  <i>Block</i><br>
  <img src="./assets/block-through.gif" width="600" alt="Block" style="border: 5px solid black;">
</p>

Like its predecessors, you use a paddle to control a limited amount of balls in order to destroy all playable blocks in a given level. Broken blocks have a chance of dropping power-ups that either aid or hinder your progress depending on the difficulty level. Bombs scattered throughout the levels also provide a means of removing rows more efficiently. 

As a unique twist, all levels in Zodiac Catch contain an unexpected element - blackholes. Unlike normal bricks, these are not only unbreakable, but cause any balls that hit them to be lost forever. The locations of these special bricks remain unknown until you encounter one. Thus, it is up to the player to tactically avoid them during their gameplay run.

To further put a spin on the typically non-narrative genre, our game is themed after the Chinese zodiac. Each stage corresponds to an animal from the twelve-year cycle: rat, ox, tiger, rabbit, dragon, snake, horse, goat, monkey, rooster, dog and pig. A bonus feature found on the main page, you can also enter your birth year to find the zodiac animal that represents you. 

With fast-paced action and engaging mechanics, Zodiac Catch is a great way to put your video gaming skills to the test, and learn about Chinese mythology along the way.

---

# Requirements
## Early Stages design & Ideation process
<table>
    <tr>
        <th>Game Type</th>
        <th>Game Inspiration</th>
        <th>Game Description</th>
        <th>Possible Game Twists</th>
    </tr>
    <tr>
        <td><strong>Block</strong> 🟣</td>
        <td><a href="https://www.youtube.com/watch?v=aU1Hrpr2igM" target="_blank">Watch Gameplay</a></td>
        <td>
            A classic ball-and-brick game where players break bricks by bouncing a ball off a paddle.
        </td>
        <td>
            - Power-Ups: Special bricks drop power-ups like paddle enlargement or extra balls. <br>
            - Multi-Ball Chaos: Introduce multiple balls with different behaviors.
        </td>
    </tr>
    <tr>
        <td><strong>Bombie</strong> 💣</td>
        <td><a href="https://www.youtube.com/watch?v=W5vcOb7laG0" target="_blank">Watch Gameplay</a></td>
        <td>
            A bomb-based strategy game where players place bombs to destroy walls and eliminate opponents.
        </td>
        <td>
            - Smart AI Opponents: Enemies can strategically place bombs and evade explosions. <br>
            - Customizable Maps: Players can modify the layout and design of the battlefield. <br>
        </td>
    </tr>
    <tr>
        <td><strong>Temple Escape</strong> ⛩️</td>
        <td><a href="https://www.youtube.com/watch?v=eCpVc_ELSBk&list=PLEufPunsvT1cysv42S52Y6u59wxtlPb6j&index=1" target="_blank">Watch Gameplay</a></td>
        <td>
            A maze-based puzzle game where players move in straight lines until they hit a wall.
        </td>
        <td>
            - Traps & Timed Puzzles: Moving obstacles force players to think ahead. <br>
            - Power-ups & Outfits: Collectables provide unique perks. <br>
        </td>
    </tr>
    <tr>
        <td><strong>Ladder Master</strong> 🪜</td>
        <td><a href="https://www.youtube.com/watch?v=OkTk5ky-GWc" target="_blank">Watch Gameplay</a></td>
        <td>
            A challenging platformer where players must time movements carefully to cross obstacles.
        </td>
        <td>
            - 2D River Crossing: Instead of climbing, make it about crossing a river with unstable platforms. <br>
            - Character Color Change: Random color changes affect mechanics.
        </td>
    </tr>
    <tr>
        <td><strong>Level Devil</strong> 😈</td>
        <td><a href="https://www.youtube.com/watch?v=nn2EUssloa4" target="_blank">Watch Gameplay</a></td>
        <td>
            A tricky platformer filled with deceptive mechanics and unexpected traps.
        </td>
        <td>
            - Hidden Traps: Fake platforms and misleading paths test the player's observation skills. <br>
            - Dynamic Triggers: Actions change the level unpredictably. <br>
        </td>
    </tr>
</table>

## User Stories & Epics
<table>
  <tr>
    <th>Epic</th>
    <th>Stakeholder</th>
    <th>User Story</th>
    <th>Requirement</th>
  </tr>
  <tr>
    <td rowspan="2">Creating an intriguing and various game experience</td>
    <td>User</td>
    <td>
      As a user, I want certain bricks to drop power-ups, such as double points
      or paddle expansion, to add variety to the game.
    </td>
    <td>
      Given certain bricks contain a specific power-up, when the players break
      one of these bricks, then the corresponding power-up, such as double
      points or paddle expansion, will drop for the player to collect.
    </td>
  </tr>
  <tr>
    <td>Speedrun Competitor</td>
    <td>
      As a speedrun competitor, I want to have different records to pass the
      game.
    </td>
    <td>
      Given the game has time trials, when I play the game, then I can try to
      beat my previous records and climb the leaderboard.
    </td>
  </tr>
  <tr>
    <td rowspan="2">Try to learn from failure and frustrations</td>
    <td>Parents</td>
    <td>
      As parents, I want my children to train their focus and reaction speed.
    </td>
    <td>
      Given the increasing difficulty of levels, when the speed of the board
      increases, then the child needs to focus more and react fast to complete
      the level.
    </td>
  </tr>
  <tr>
    <td>Positive Reinforcer</td>
    <td>
      As a person who does better with positive encouragement, I want there to
      be a reward system, so that I’m more motivated to keep playing and
      complete harder levels.
    </td>
    <td>
      Given there is a completion ladder, when a certain level is
      completed/threshold is met, then rewards will be granted.
    </td>
  </tr>
  <tr>
    <td rowspan="2">Training Response Time</td>
    <td>User</td>
    <td>
      As a user, I want to improve my response time so that in the future, when
      something happens, especially in dangerous situations, I can react quickly
      and increase my chances of survival.
    </td>
    <td rowspan="2">
      Given that I want to train my response time, when the ball falls, I must
      catch it within a limited time in order to pass the stage.
    </td>
  </tr>
  <tr>
    <td>Gamer</td>
    <td>
      As a gamer, I want to train my response time so that in the future, when I
      participate in gaming competitions, I can react quickly to increase my
      chances of winning.
    </td>
  </tr>

  <tr>
    <td rowspan="3">Educational</td>
    <td>Physics Teacher</td>
    <td>
      As a physics teacher/professor, I want to make use of the game mechanics
      and physics in an educational setting, so that my students have a more
      visual and interesting way to learn about physics.
    </td>
    <td>
      Given I want to show the concept of momentum to kids, when the kids are in
      the game, then there can be pause so that the motion can be observed in
      more detail (maximized with angles, velocity, etc shown).
    </td>
  </tr>
  <tr>
    <td>Parents</td>
    <td>
      As parents and teachers, I want my kids or students to learn Chinese
      culture through this game, so that they can explore different culture and
      immerse their experience.
    </td>
    <td>
      Given I want to teach kids the concept about Chinese zodiac, when kids
      enter the main page of the game, then they can know the number and the
      animal of Chinese zodiac.
    </td>
  </tr>
  <tr>
    <td>User</td>
    <td>
      As a user, I want to know my Chinese zodiac, so that in the future, I can
      know more about myself and go to fortune teller. When I go to Asian
      countries, I have more topic to have a conversation.
    </td>
    <td>
      Given I want to know my Chinese zodiac, when I enter the game select page
      and enter my birthday, then I can know about my Chinese zodiac.
    </td>
  </tr>
</table>

## Paper Prototype
<p align="center">
  <b>Figure 3</b><br>
  <i>Paper Prototype - Block</i><br>
  <img src="./assets/paper-prototype-block.gif" width="600" alt="Block" style="border: 5px solid black;">
</p>

<p align="center">
  <b>Figure 4</b><br>
  <i>Prototype - Zodiac Catch</i><br>
  <img src="./assets/prototype-zodiac-catch.gif" width="600" alt="Block" style="border: 5px solid black;">
</p>


# Design
## Class Diagrams

After creating the paper prototype and sketching our ideas in wireframes, we moved on to designing our game's system architecture through in-person meetings. This process ensured a shared understanding of Object-Oriented Design and served as a reference for our source code.

In our initial meeting, we identified the game's essential components, such as the ball, paddle, and blocks. We then outlined the functions of each component, the unique features of different game stages, and how these elements interact. From this, we developed a basic class diagram.
<p align="center">
  <b>Figure 5</b><br>
  <i>Initial Class Diagram</i><br>
  <img src="./assets/Initial-Class-Diagram.png" width="1000" alt="Block" style="border: 5px solid black;">
</p>

During our first stage of coding, we decided to adopt the **Model-View-Controller (MVC)** design pattern, as it could accommodate our complex features and multiple game views. This led to a more detailed class diagram, which included:
- **Controllers** to handle keyboard input, manage game state across different stages, and activate special features.
- **Views** to define the game's aesthetics and user interface.
- **Models** to store all game components, including the brick patterns for various stages.
This structured approach helped us maintain a clear separation of concerns and facilitated scalable development.

<p align="center">
  <b>Figure 6</b><br>
  <i>Updated Class Diagram</i><br>
  <img src="./assets/classDiagram.png" width="1000" alt="Block" style="border: 5px solid black;">
</p>

## Sequence Diagram
<p align="center">
  <b>Figure 6</b><br>
  <i>Sequence Diagram</i><br>
  <img src="./assets/sequence.jpeg" width="1000" alt="Block" style="border: 5px solid black;">
</p>

---
# Implementation
## Anticipated Challenges
Before the development stage, we anticipated several challenges:
* **Ball Physics**: We were uncertain whether implementing realistic ball behaviour upon collision, including angle and speed adjustments, would be difficult and require advanced physics knowledge.
* **Difficulty Balancing**: Various factors could influence the game's difficulty, such as ball speed, block patterns, black hole positioning, and the drop rate of power-ups. Managing these to create a balanced experience seemed challenging.
However, as we progressed, these concerns proved manageable. Since the ball moves without gravity, its position could be updated simply by adding or deducting to its x and y values. For difficulty balancing, we refined the parameters through iterative testing between our group members, and got positive feedback from the user evaluations. 

## Unexpected Challenges
While the above anticipated difficulties were easier to resolve, we faced unexpected challenges during development:
* **Ball Speed in Gravity Mode**  
    One of our power-ups introduces a gravity mode where all balls experience gravitational acceleration.  
    Our initial approach applied a downward acceleration similar to real-world physics. Since each frame represents a fraction of a second, ball speed was measured in pixels per frame. Gravity, as a form of acceleration, changes the ball's velocity, which we simulated by adjusting its vertical speed each frame.  
    However, implementing this became complex due to interactions with other power-ups that also influenced ball speed. During testing, it was difficult to isolate and evaluate the effects of gravity, especially with multiple balls on the screen.
* **Displaying Active Power-Ups and Timers**  
    Another challenge was accurately displaying the active power-ups and their countdowns on the sidebar. Ensuring the correct visuals and timings, particularly when multiple power-ups were active, required additional debugging and adjustments.  
    We achieved this by:  
    1. Making an instance of a timer after a player collects a power-up which keeps track of its duration 
    2. The power-up type and remaining time are sent to the sidebar for display to the player.
    3. In the case that the player collects the same type of power-up whilst the effect is still active, the `EffectController` will first reset the existing timer and then update the duration on the sidebar to reflect the newly collected power-up’s remaining time
    4. Once the timer for a power-up reaches zero, the effect will be removed from the sidebar, indicating the effect is no longer active

---
# Evaluation
It is very important to understand user’s reaction and their feedback. Since the project started, we have been carried out several evaluations to understand how well the game met players' expectations. At the same times, these feedback also help us to identify areas for improvement and assess.

The two major evaluation was held in the middle of the game, and the end of the project. These evaluation also segmented into two components: qualitative and quantitative.
## Qualitative Evaluation
Just after we finished the basic game prototype, we carried out first major evaluations, in the qualitative evaluation part, we asked each player to play our games several minutes and give us some feedback used Heuristic Evaluation to understand how players felt about the game.

### Player’s Feedback: 
In the later stages of development, our discussions and revisions were consistently guided by player feedback.

By understanding what players cared about during gameplay and collecting questionnaire responses, we summarised the following strengths and areas for improvement.

### What Players Enjoyed:

* **Art Design:** Users appreciated the pixel art style of the game, particularly the zodiac animal designs and the consistent pixel-style aesthetic, including the fonts and background.

* **Difficulty Balance:** Players noticed that in easy mode, they could become familiar with the gameplay mechanics and gain a sense of achievement after clearing a stage, while in hard mode, they could challenge themselves and become immersed in the variety of tools that added fun to the gameplay.

* **Variety of tools:** The variety and design of the tool were enjoyable, adding fun and excitement to the gameplay.

### What Players think it can be improved:

* **Lack of Instructions**: Several users found it unclear which keys or mouse actions were needed to progress through the game. Adding clearer instructions or a tutorial was suggested.

* **Paddle Visibility**: The low contrast between the paddle and the background made it difficult for players to locate the paddle, especially when first entering the game view. This caused confusion about what they could control.

* **Infinity Ball Indicator**: Players struggled to recognise when the Infinity Ball feature was active. Since this mechanic is crucial for progressing through stages, users suggested making its activation more visually apparent.

* **Power-Ups**: The power-ups dropping from bricks were too small for users to distinguish between different types. It was suggested that using distinct colours or shapes could improve clarity.

* **Ball-Paddle Collision Mechanics**: One user recommended that the ball should reflect at different angles depending on where it hits the paddle. This would provide players with greater control and add more variety to the gameplay.

* **Zodiac Year Explanation**: Users wanted more context on the Chinese Zodiac years and how they relate to birthdays. Adding a brief explanation in the stage selection view would help players understand why they should enter their birthdate.



<p align="center">
  <b>Figure 2</b><br>
  <i>Zodiac Catch</i><br>
  <img src="./assets/evaluation-improvements.png" width="500" alt="Block" style="border: 5px solid black;">
</p>

### Heuristic Evaluation: 
<table align="center">
  <tr>
    <th align="center">Interface Issue</th>
    <th align="center">Issues</th>
    <th align="center">Heuristic(s)</th>
    <th align="center">Frequency</th>
    <th align="center">Impact</th>
    <th align="center">Persistence</th>
    <th align="center">Severity</th>
  </tr>
  <tr>
    <td align="center">Stage Map</td>
    <td align="center">Confusing about how to pin in birthday and why?</td>
    <td align="center">Visibility of system status, User control and freedom</td>
    <td align="center">4</td>
    <td align="center">4</td>
    <td align="center">4</td>
    <td align="center">4</td>
  </tr>
  <tr>
    <td align="center">Game View</td>
    <td align="center">Celing and Sidewall is invisiable</td>
    <td align="center">User control and freedom</td>
    <td align="center">2</td>
    <td align="center">1</td>
    <td align="center">1</td>
    <td align="center">1.33</td>
  </tr>
  <tr>
    <td align="center">Game View</td>
    <td align="center">colour of the background and paddle clash</td>
    <td align="center">Visibility of system status</td>
    <td align="center">4</td>
    <td align="center">1</td>
    <td align="center">4</td>
    <td align="center">3</td>
  </tr>
  <tr>
    <td align="center">Game View</td>
    <td align="center">wish that there were more visual cues to notify that a power up has been eaten</td>
    <td align="center">Visibility of system status</td>
    <td align="center">4</td>
    <td align="center">1</td>
    <td align="center">1</td>
    <td align="center">2</td>
  </tr>
  <tr>
    <td align="center">Stage Selection</td>
    <td align="center">Unclear that user can enter their birth year, may be better to add a cursor
there</td>
    <td align="center">Visibility of system status</td>
    <td align="center">3</td>
    <td align="center">2</td>
    <td align="center">1</td>
    <td align="center">2</td>
  </tr>
</table>

The result of Heuristic Evaluation shows that nearly most of the sever problem are related to “Visibility of system status”, 

1. Players didn’t understand the relationship between the Chinese Zodiac and their birthday, which caused confusion about why they were asked to enter their birthdate. Based on this feedback, we plan to add an **explanation page** to clarify the reason behind this feature.
2. The background was described as overly flashy and visually distracting, making it difficult for players to distinguish between the paddle they were controlling and the background. Additionally, some players reported that the icons for effects were hard to recognize due to the lack of contrast.

## Quantitative Evaluation
In this part, we use NASA TLX and System Usability Scale to analyse how player feels about both easy mode and hard mode.

#### NASA TLX
We used the NASA Task Load Index (NASA-TLX) to evaluate the cognitive and physical workload imposed by both Easy and Hard game modes. The TLX assesses six dimensions: Mental Demand, Physical Demand, Temporal Demand, Performance, Effort, and Frustration.


#### Easy Mode
[Click here to view Easy Mode results.](./assets/easy-mode.md)

#### Hard Mode
[Click here to view Hard Mode results.](./assets/easy-mode.md)


### Compare between easy and hard mode

<p align="center">
  <b>Figure 2</b><br>
  <img src="./assets/compare_easy_hard.png" width="500" alt="Block" style="border: 5px solid black;">
</p>

<table align="center">
  <tr>
    <th align="center">Evaluation Aspect</th>
    <th align="center">Easy Avg. Score</th>
    <th align="center">Hard Avg. Score</th>
    <th align="center">Observation</th>
  </tr>
  <tr>
    <td align="center">Mental Demand</td>
    <td align="center">33.21</td>
    <td align="center">41.43</td>
    <td align="center">↑ Increased cognitive effort</td>
  </tr>
  <tr>
    <td align="center">Physical Demand</td>
    <td align="center">38.21</td>
    <td align="center">40.71</td>
    <td align="center">↑ Increased physical/operational strain</td>
  </tr>
  <tr>
    <td align="center">Temporal Demand</td>
    <td align="center">47.86</td>
    <td align="center">54.64</td>
    <td align="center">↑ Increased time pressure</td>
  </tr>
  <tr>
    <td align="center">Performance<br>(higher = worse)</td>
    <td align="center">67.14</td>
    <td align="center">64.29</td>
    <td align="center">↓  Decreased perceived performance</td>
  </tr>
  <tr>
    <td align="center">Effort</td>
    <td align="center">43.57</td>
    <td align="center">53.93</td>
    <td align="center">↑ More effort required</td>
  </tr>
  <tr>
    <td align="center">Frustration</td>
    <td align="center">29.29</td>
    <td align="center">39.64</td>
    <td align="center">↑ Higher frustration level</td>
  </tr>
</table>

Our analysis indicates that the Hard mode imposes a significantly greater workload than the Easy mode, particularly in terms of Mental Demand, Temporal Demand, and Frustration. While self-reported performance scores remained consistent across modes, players reported higher exertion and emotional tension when playing in Hard mode. These findings support the effectiveness of our difficulty design in increasing challenge, but also highlight the need for balancing difficulty with player satisfaction.


#### System Usability Scale

We conducted a System Usability Scale (SUS) evaluation across both Easy and Hard game modes to assess the overall usability and player perception. The scores were averaged per participant across both modes, and the results were rounded to the nearest integer for clarity. Each participant rated the system on 10 standardised SUS questions, leading to an aggregate score out of 100.

[Click here to view raw System Usability Scale results.](./assets/SUS-raw.md)

[Click here to view converted System Usability Scale results.](./assets/SUS-converted.md)

<p align="center">
  <b>Figure 2</b><br>
  <img src="./assets/sus-before.png" width="500" alt="Block" style="border: 5px solid black;">
</p>

The SUS evaluation shows that the game is generally perceived as usable and user-friendly, with particularly strong ratings for ease of use, learning speed, and system integration. The consistency of responses between Easy and Hard modes suggests that the core interface is well-designed and scales effectively with difficulty. Some improvements may be explored to further reduce perceived complexity or technical support needs in the harder levels, but overall usability remains strong.

### Finding
Based on the Wilcoxon Signed-Rank Test:

-  By using the Wilcoxon Signed Rank Test, we obtained a score of 10 for the System Usability Survey (SUS) and a score of 17 for NASA TLX from surveys collected from 14 users. The alpha value is set to 0.05.

-  The NASA-TLX score is statistically significant, indicating that there may be a notable difference in perceived workload between the Easy and Hard levels. From the user data, we observed that Temporal Demand and Physical Demand were generally higher when users played the Hard mode. High temporal demand implies users may feel time pressure or that tasks are too fast-paced. High physical demand suggests users had to put in more effort to interact with the game, possibly due to complex controls or rapid actions.
  
-  The SUS score is not statistically significant, suggesting no meaningful difference in usability between the Easy and Hard levels. This indicates that users generally perceived the interface to be equally usable across difficulty modes. However, the average SUS score is 31.1, which is significantly below the standard benchmark of 68. This suggests that users struggled with the overall usability of the system, and improvements are clearly needed to enhance intuitiveness, reduce confusion, and increase user satisfaction.

-  Improvements based on NASA TLX: Simplify in-game processes, reduce sensory overload, and improve real-time feedback for power-ups and gameplay progress.
   
-  Improvements based on SUS: Rework onboarding/tutorials, improve layout consistency, and streamline input methods to reduce confusion and operational strain.


## Final Evaluation

### Improvement

### New SUS

### Compare

---
# Process
## Zenhub Kanban

In our project, we use ZenHub as our project management tool due to its key advantages:

1. **Seamless GitHub Integration**: ZenHub is embedded directly within GitHub, enabling developers to manage tasks without switching between platforms, improving efficiency.
2. **Browser Extension Support**: ZenHub offers a browser extension that integrates seamlessly into the GitHub repository interface, allowing project management directly within the repo view.
3. **Epics Support**: ZenHub provides Epics to group related issues and manage larger tasks, a feature that GitHub Projects lacks.

Additionally, ZenHub’s deep integration ensures that creating or updating issues in ZenHub is synchronized with GitHub in real-time, maintaining data consistency. Overall, ZenHub’s capabilities and tight GitHub integration make it an ideal choice for our project management.

<p align="center">
  <b>Figure</b><br>
  <i>Zenhub integrate Github</i><br>
  <img src="./assets/zenhub.png" width="600" alt="Block" style="border: 5px solid black;">
</p>


## Whimsical Wireframe

We use Whimsical to store and organize our `brainstorming drafts`, `level wireframes`, `mind maps`, and other project ideas. It provides real-time collaboration, allowing our team to work together seamlessly, co-edit documents, and share feedback instantly. Additionally, the sticky note feature enables quick discussions and idea exchanges, fostering smooth communication within the team. Its intuitive interface and versatile tools make it an essential part of our workflow for efficient planning and coordination.

<p align="center">
  <b>Figure</b><br>
  <i>Whimsical</i><br>
  <img src="./assets/whimsical.gif" width="600" alt="Block" style="border: 5px solid black;">
</p>

---
# Conclusion

# References
