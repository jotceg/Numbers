# Numbers
A simple, yet advanced calculator

### Things to consider:
1. Migrate to Firebase for the web.app domain
2. Add a splashscreen for iOS devices
3. Refactor the code
4. Clear the board if state and result aren't empty and user enters new number to the result (is it what calculator is supposed to do?)

### Things to implement:
1. Typed and result should shrink when there's too much text
2. Do something with "00" button (for example, make "C" button erase everything and then the "00" will leave zero only, where "0" will just add zero)
3. Responsive web design on desktop and tablets
4. "÷" text should be an icon
5. Weight for the "+" and "-" icons should be the same with the "X" one
6. Top margin should be auto-calculated for the RWD reasons
7. Delete sibling symbols if they aren't needed (for example, "10 - + 5" isn't valid but "10 - 5" is)

# Work in progress:
1. Should delete any unnecessary symbols if the expression is invalid (for example "100 + 5 -" should be converted to "100 + 5") / block the evaluation process (blocking is done but deletion is not)

### Things that are already implemented:
1. Icons should be the same size
2. Cannot allow for evaluating if there's no expression (for example expression "1000" cannot be evaluated, because it's not a mathematical expression)
3. Cannot divide by zero
4. Delete any unnecessary console logs