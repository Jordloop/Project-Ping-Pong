# Ping-Pong

* User inputs a number.
* A list of numbers is displayed from one to users chosen number.
* If a number is divisible by 3 it will return "Ping" rather than the number.
* If a number is divisible by 5 it will return "Pong" rather than the number.
* If a number is divisible by 15 it will return "Ping-Pong" rather than the number.

## Getting Started

* Clone project from Github repository.
* Open index.html from top level of directory using any modern browser.

## Build With:

* HTML/CSS/Bootstrap.
* JavaScript, jQuery.

# Author

* Jordan Loop

## Specs

### 1. Receive userInput
* a. Collect userInput.√
* b. Parse userInput to num.√
* c. Clear output.√
* d. Display userInput.√
* e. Test userInput is a number using if/else statement.√
* f. Display "Please use numbers only" if userInput != number.√

### 2. Loop to create array
* a. Create an empty array.√
* b. Use for loop iterating amount of times equal to userInput.√
* c. Each iteration appends current index to array.√

### 3. Loop to splice array
* a. Loop through oneToUserInput.√
* b. Find each element in oneToUserInput where element % (3, 5, 15) = 0.√
* c. Each found element splice in ('ping', 'pong', 'ping-pong') if element = (3, 5, 15).√
