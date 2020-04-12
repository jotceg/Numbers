# Numbers
A simple, yet advanced calculator

### Things to implement:
1. Typed and result should shrink when there's too much text
2. Do something with "00" button (for example make "C" button erase everything and then the "00" will leave zero only, where "0" will just add zero)
3. Responsive web design on desktop and tablets
4. "÷" text should be an icon
5. Weight for the "+" and "-" icons should be the same with the "X" one
6. Top margin should be auto-calculated for the RWD reasons
7. Should delete any unnecessary symbols if the expression is invalid (for example "100 + 5 -" should be converted to "100 + 5") / block the evaluation process
8. Consider migrating to Firebase for the web.app domain

### Already implemented:
1. Icons should be the same size
2. Cannot allow for evaluating if there's no expression (for example expression "1000" cannot be evaluated, because it's not a mathematical expression)
3. Cannot divide by zero
4. Delete any unnecessary console logs