# Software Quality & Testing

## Triangle Problem: side a, b, c
<table align="center">
  <tr>
    <th align="center">Partition</th>
    <th align="center">Description</th>
    <th align="center">Values</th>
  </tr>
  <tr>
    <td align="center">Invalid: Non-positive side</td>
    <td align="left">At least one side is ≤ 0, making it invalid.</td>
    <td align="left">(a ≤ 0, b > 0, c > 0) OR (b ≤ 0, a > 0, c > 0) OR (c ≤ 0, a > 0, b > 0)</td>
  </tr>
  <tr>
    <td align="center">Invalid: Triangle inequality violated</td>
    <td align="left">The sum of two sides is not greater than the third.</td>
    <td align="left">(a + b ≤ c) OR (a + c ≤ b) OR (b + c ≤ a)</td>
  </tr>
  <tr>
    <td align="center">Valid: Equilateral triangle</td>
    <td align="left">All three sides are equal.</td>
    <td align="left">a = b = c > 0</td>
  </tr>
  <tr>
    <td align="center">Valid: Isosceles triangle</td>
    <td align="left">Exactly two sides are equal.</td>
    <td align="left">(a = b ≠ c) OR (a = c ≠ b) OR (b = c ≠ a), with triangle inequality satisfied</td>
  </tr>
  <tr>
    <td align="center">Valid: Scalene triangle</td>
    <td align="left">All three sides are different.</td>
    <td align="left">a ≠ b ≠ c, with triangle inequality satisfied</td>
  </tr>
</table>

## Testing a UK Tax Allowance Calculator
<table align="center">
  <tr>
    <th align="center">Category</th>
    <th align="center">Description</th>
    <th align="center">Values</th>
  </tr>
  <tr>
    <td align="center">A</td>
    <td align="left">In Personal Allowance (No tax payable)</td>
    <td align="left">pay ≤ 12,570</td>
  </tr>
  <tr>
    <td align="center">B</td>
    <td align="left">Negative income (Invalid case)</td>
    <td align="left">pay < 0</td>
  </tr>
  <tr>
    <td align="center">C</td>
    <td align="left">Basic Rate Tax (20%)</td>
    <td align="left">12,571 ≤ pay ≤ 50,270</td>
  </tr>
  <tr>
    <td align="center">D</td>
    <td align="left">Higher Rate Tax (40%)</td>
    <td align="left">50,271 ≤ pay ≤ 125,140</td>
  </tr>
  <tr>
    <td align="center">E</td>
    <td align="left">Additional Rate Tax (45%)</td>
    <td align="left">pay > 125,140</td>
  </tr>
  <tr>
    <td align="center">F</td>
    <td align="left">Personal Allowance Reduction (Gradual loss of allowance)</td>
    <td align="left">100,000 ≤ pay ≤ 125,140 (Allowance reduces £1 for every £2 over £100,000)</td>
  </tr>
  <tr>
    <td align="center">G</td>
    <td align="left">Marriage Allowance (Transfer of £1,260 personal allowance)</td>
    <td align="left">If income ≤ 12,570 and spouse earns 12,571 - 50,270, up to £1,260 can be transferred, reducing their tax by up to £252</td>
  </tr>
  <tr>
    <td align="center">H</td>
    <td align="left">Blind Person’s Allowance (Additional tax-free amount)</td>
    <td align="left">Additional £3,070 on top of Personal Allowance if legally blind</td>
  </tr>
</table>

## Test Cases
<table align="center">
  <tr>
    <th align="center">Test Case</th>
    <th align="center">Income</th>
    <th align="center">Expected Tax Calculation</th>
    <th align="center">Expected Tax Payable</th>
  </tr>
  <tr>
    <td align="center">TC1</td>
    <td align="left">£12,000</td>
    <td align="left">Income below Personal Allowance (£12,570)</td>
    <td align="left">£0</td>
  </tr>
  <tr>
    <td align="center">TC2</td>
    <td align="left">£20,000</td>
    <td align="left">Taxable: £20,000 - £12,570 = £7,430<br>£7,430 × 20%</td>
    <td align="left">£1,486</td>
  </tr>
  <tr>
    <td align="center">TC3</td>
    <td align="left">£60,000</td>
    <td align="left">£37,700 × 20% + (£60,000 - £50,270) × 40%</td>
    <td align="left">£11,432</td>
  </tr>
  <tr>
    <td align="center">TC4</td>
    <td align="left">£130,000</td>
    <td align="left">£37,700 × 20% + £50,270 × 40% + (£130,000 - £125,140) × 45%</td>
    <td align="left">£29,835</td>
  </tr>
  <tr>
    <td align="center">TC5</td>
    <td align="left">Spouse A: £10,000<br>Spouse B: £30,000</td>
    <td align="left">Spouse A can transfer £1,260 to Spouse B<br>Spouse B new allowance = £13,830<br>Taxable: (£30,000 - £13,830) × 20%</td>
    <td align="left">£3,234</td>
  </tr>
  <tr>
    <td align="center">TC6</td>
    <td align="left">£15,000</td>
    <td align="left">Blind Allowance: £3,070<br>New Personal Allowance = £12,570 + £3,070 = £15,640<br>£15,000 ≤ £15,640, No tax payable</td>
    <td align="left">£0</td>
  </tr>
</table>

## Our Black Box Tests

<table border="1">
  <tr>
    <th align="center">Functional Unit</th>
    <th align="center">Test</th>
    <th align="center">Input</th>
    <th align="center">Expected Output</th>
  </tr>
  <!-- Keyboard Input -->
  <tr>
    <td rowspan="3">Keyboard Input</td>
    <td>Start the game</td>
    <td>Keyboard: Enter key</td>
    <td>Game starts</td>
  </tr>
  <tr>
    <td>Pause the game</td>
    <td>Keyboard: P key</td>
    <td>Timer stops, pause menu appears</td>
  </tr>
  <tr>
    <td>Navigate menu options</td>
    <td>Keyboard: Up/Down arrow keys</td>
    <td>Moves between menu options</td>
  </tr>

  <!-- Brick Behavior -->
  <tr>
    <td rowspan="2">Brick Behavior</td>
    <td>Brick disappears when hit</td>
    <td>Ball touches the brick</td>
    <td>Brick disappears</td>
  </tr>
  <tr>
    <td>Black Hole (absorbs the ball, indestructible)</td>
    <td>Ball touches it</td>
    <td>Ball shrinks and eventually disappears</td>
  </tr>

  <!-- Paddle Mechanism -->
  <tr>
    <td rowspan="5">Paddle Mechanism</td>
    <td>Move paddle left</td>
    <td>Keyboard: Left arrow key</td>
    <td>Paddle moves left</td>
  </tr>
  <tr>
    <td>Move paddle right</td>
    <td>Keyboard: Right arrow key</td>
    <td>Paddle moves right</td>
  </tr>
  <tr>
    <td>Paddle bounce</td>
    <td>Keyboard: Up arrow key</td>
    <td>Paddle moves up and down; ball speed increases</td>
  </tr>
  <tr>
    <td>Adjust ball rebound angle</td>
    <td>Move paddle left or right</td>
    <td>Ball bounces at an angle based on impact</td>
  </tr>
  <tr>
    <td>Paddle boundary restriction</td>
    <td>Keyboard: Left/Right arrow keys</td>
    <td>Paddle cannot move outside the screen</td>
  </tr>

  <!-- Ball Mechanism -->
  <tr>
    <td rowspan="2">Ball Mechanism</td>
    <td>Ball rebounds when it hits a brick, paddle, or wall</td>
    <td>No input</td>
    <td>Ball rebounds</td>
  </tr>
  <tr>
    <td>Ball count decreases when it falls off the screen</td>
    <td>No input</td>
    <td>Ball count decreases</td>
  </tr>

  <!-- Power-Up Mechanism -->
  <tr>
    <td rowspan="11">Power-Up Mechanism</td>
    <td>Shrinking paddle</td>
    <td>Paddle collects power-up</td>
    <td>Paddle shrinks for 10 seconds</td>
  </tr>
  <tr>
    <td>Expanding paddle</td>
    <td>Paddle collects power-up</td>
    <td>Paddle widens for 10 seconds</td>
  </tr>
  <tr>
    <td>Max-width paddle</td>
    <td>Paddle collects power-up</td>
    <td>Paddle reaches maximum width for 10 seconds</td>
  </tr>
  <tr>
    <td>Decrease game time</td>
    <td>Paddle collects power-up</td>
    <td>Game time decreases by 10 seconds</td>
  </tr>
  <tr>
    <td>Increase game time</td>
    <td>Paddle collects power-up</td>
    <td>Game time increases by 10 seconds</td>
  </tr>
  <tr>
    <td>Infinite balls</td>
    <td>Paddle collects power-up</td>
    <td>Unlimited balls for 10 seconds</td>
  </tr>
  <tr>
    <td>Reverse paddle controls</td>
    <td>Paddle collects power-up</td>
    <td>Paddle movement is reversed for 10 seconds</td>
  </tr>
  <tr>
    <td>Increase ball size</td>
    <td>Paddle collects power-up</td>
    <td>Ball size increases for 10 seconds</td>
  </tr>
  <tr>
    <td>Decrease ball size</td>
    <td>Paddle collects power-up</td>
    <td>Ball size decreases for 10 seconds</td>
  </tr>
  <tr>
    <td>Enable ball gravity</td>
    <td>Paddle collects power-up</td>
    <td>Gravity effect increases for 10 seconds</td>
  </tr>
  <tr>
    <td>Increase ball speed</td>
    <td>Paddle collects power-up</td>
    <td>Ball speed increases for 10 seconds</td>
  </tr>

  <!-- Scoring Mechanism -->
  <tr>
    <td>Scoring Mechanism</td>
    <td>Increase score when a brick is destroyed</td>
    <td>No input</td>
    <td>Score +100</td>
  </tr>

  <!-- Time Mechanism -->
  <tr>
    <td>Time Mechanism</td>
    <td>Game time decreases continuously</td>
    <td>No input</td>
    <td>Time decreases</td>
  </tr>

  <!-- Selecting Stage -->
  <tr>
    <td rowspan="3">Stage Selection</td>
    <td>Select birthday</td>
    <td>Keyboard: Left/Right arrow keys + Enter key</td>
    <td>Displays chosen date</td>
  </tr>
  <tr>
    <td>Display Zodiac sign</td>
    <td>After selecting birthday</td>
    <td>Shows corresponding Zodiac sign</td>
  </tr>

  <!-- Back Button -->
  <tr>
    <td>Back to menu</td>
    <td>Keyboard: Enter key</td>
    <td>Returns to main menu</td>
  </tr>

  <!-- Game Win/Loss Conditions -->
  <tr>
    <td rowspan="3">Win/Loss Conditions</td>
    <td>All bricks destroyed</td>
    <td>No input</td>
    <td>Win</td>
  </tr>
  <tr>
    <td>Time runs out</td>
    <td>No input</td>
    <td>Loss</td>
  </tr>
  <tr>
    <td>All balls lost</td>
    <td>No input</td>
    <td>Loss</td>
  </tr>
</table>
