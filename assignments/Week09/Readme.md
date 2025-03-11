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
