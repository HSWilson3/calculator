# Calculator

Calculator project for The Odin Project: Foundations

## Specifications

This calculator contains functions for addition, subtraction, multiplication, and division.

### Gotchas:

Watch out for and fix these bugs if they show up in your code:

- You should round answers with long decimals so that they don’t overflow the display.

- Pressing = before entering all of the numbers or an operator could cause problems!

- Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”.

- **Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the user.**
  Example: you enter a number (2), followed by an operator button (+). You press the operator button (+) a second consecutive time. Your calculator should not evaluate this as (2 + 2) and should not display the result (4). If consecutive operator buttons are pressed, your calculator should not run any evaluations, it should only take the last operator entered to be used for the next operation.

### Extra credit

- Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display.

- Add a “backspace” button, so the user can undo their last input if they click the wrong number.

- Add keyboard support!
