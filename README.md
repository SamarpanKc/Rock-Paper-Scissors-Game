# ROCK PAPER SCISSORS: The first Javascript Project

## Acknowlagement

## Strategy for Development

1. Think about what steps we need.
2. Convert those steps into code.

## Process of Development

In the starting phase of development in javascript i'm reading maths in javascript how the mathematics things works in javascript. In this phase i have to develop the ROCK PAPER SCISSORS Game using Boolean functions, If-Statements,..

## Steps

**When we click a button:**

1. Computer randomly selects a move
2. Compare the moves to get the result
3. Display the result in a popup
   This is called an Algorithm. An algorithm is a set of steps to complete a task or to solve a problem.
   Now converting these algorithm into code.

### When we click a button

- Making buttons, texts in html using of <button>, <H2> tags
  ![img1](image.png)
- Adding some JavaScript code for these buttons
  For Adding some JavaScript code for these buttons, we use <button onclick> for all the buttons.

### 1. Computer randomly selects a move

- We need to know `Math.ramdom();` to generate ramdom number between 0 and 1.
- <button onclick="const randomNumber = Math.random()";>
- Now click the button > F12 > console > and it generate ramdom number between 0 to 1.
- For these three parts, converting by 1/3 and 2/3
  Image

```HTML
        <button onclick="
          const randomNumber = Math.random()
          if (randomNumber>=0 && randomNumber<=1/3) {
            alert('ROCK');
          } else if(randomNumber>=1/3 && randomNumber<=2/3){
            alert('PAPER');
          } else{
            alert('SCISSORS');
          }
          ">ROCK</button>
```

_Here, computer generates random number if this number is between 0 to 1/3 then it's Rock; if this number is between 1/3 to 2/3 then it's Paper; if this number is between 2/3 to 1 then it's Scissors;_

- **Note:** If-statements have a special feature it create something called a scope.
  **Scope** limits where a variable exist.
  Any variable we create inside {will only exist inside curly brackets} we can't use this variable outside curly brackets. So,it is called a Scope.
  Scope helps us avoid naming conflits.
- Understanding the difference between scope and local variables is crucial in programming. Scope refers to the     overall environment or context where variables are accessible, while local variables are specific to a particular block of code (function) within that scope. Just like in cooking, where tools are accessible within the kitchen but specific tools are used for particular tasks, variables in programming have their scope and purpose within the code.
