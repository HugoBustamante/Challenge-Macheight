# Adminlte

This project was generated with Node js version 16.14.2.
before starting with the code you must import `fetch from "node-fetch"` to make the API request, also `readline from 'readline'` and `stdin, stdout from 'node:process'`;

To learn more about how to do these imports and what each module does, visit the following link:
[NodeJs](https://nodejs.org/api/readline.html);



## Run challenge

Run `npm run start ` to execute the challenge solution.

## Code explanation

1. `line #4:` a single function is created to make the request and the logic for the solution of the challenge.
2. `line #5, 6, 7:` a fetch request is made to the API and it returns a promise, then the response with the data in Json.
3. `line #8:` the readline module provides us an interface to read data in sequence, is used to input and output data. you must have imported the following imports before `import readline from 'readline';` y `import { stdin as input, stdout as output } from 'node:process';`
4. `line #9:` it uses the readline `question()` method to provide the user input and then calls the `(num)` callback function to store the text input there. Inside this method we will create the logic to generate the list of player pairs.
5. `line #10:` the text input is parsed to integer.
6. `line #11:` here we are going to add the list of player pairs.
7. `line #12, 13:` with the for loops, it is looking to tour the json data, position by position. The function of the nested for loop is to find the players whose height in inches equals the input number.
8. `line #15, 16, 17:` here the heights of the players are added to with the ternary conditional add to the array `pairs`, the player pairs whose height in inches is equal to the input number. This height is brought from the API response.
9. `line #20, 21, 22:` in this conditional we verify if the array is empty, if it´s empty to mean that no matches found.
10. `line #20, 21, 22:` if the array is not empty, the list is print with the player pairs whose addition is equal to the input data
