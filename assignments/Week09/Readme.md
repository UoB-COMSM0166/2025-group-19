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

