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

* User inputs a number and a list from one to chosen is returned.
Input: 9   Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

* User inputs a number and a list from one to chosen is returned replacing numbers divisible by 15 as "Ping-Pong".
Input: 9   Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Ping-Pong

* User inputs a number and a list from one to chosen is returned replacing numbers divisible by 5 as "Ping".
Input: 9   Output: 1, 2, 3, 4, Ping, 6, 7, 8, 9, Ping, 11, 12, 13, 14, Ping-Pong

* User inputs a number and a list from one to chosen is returned replacing numbers divisible by 5 as "Pong".
Input: 9   Output: 1, 2, Pong, 4, Ping, Pong, 7, 8, 9, Ping, 11, Pong, 13, 14, Ping-Pong


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
