# SPRINT1-ITAcademey Rubric: 

## 1 Functions & Template Literals

Level 1
- Exercise 1:
Creates a function that consoles the username by invoking it by passing its name as a parameter.

Level 2
- Exercise 1:
Displays the user's first and last name by means of literal templates, saving them in variables and referencing them in the printing of the message.

- Exercise 2:
Invokes a function that returns a value from within a literal template.

Level 3
- Exercise 1:
Create an array of ten functions and fill it with a loop so that each function counts from 0 to 9 for the console. Invokes each function in the array iteratively. The 0 to 9 count must be displayed ten times on the console.

- Exercise 2:
Creates a self-invoking anonymous function equal to a variable that displays the received username as a parameter as a console.


## 2 Classes & Arrow Functions

Level 1
- Exercise 1:
Displays for the console the result of a self-invoking arrow function that adds up to two numbers.

Level 2
- Exercise 1:
Creates an arrow function that, upon receiving a parameter, returns an object with an attribute whose value is the received parameter.

- Exercise 2:
Creates a Person class that receives a 'name' parameter when instantiated. The class will include a dirName method that prints the 'name' parameter to the console. Invokes the dirName method from outside the class.

Level 3
- Exercise 1:
Write an object-creating function that instances an abstract class. Invoke it with different definitions.

## 3 Promises & Callbacks

Level 1
- Exercise 1:
Creates a function that returns a Promise that invokes the resolve () or reject () function that it receives. Invoke it by passing both functions so that they print a different message depending on whether the Promise is resolved or not.

- Exercise 2:
Creates an arrow function that receives a parameter and a callback function and passes a message or another to the function (which will be printed by the console) depending on the parameter received.

Level 2
- Exercise 1:
Given the employee and salary objects, create an arrow function getEmployee that returns a Promise by searching the object for its id.

## 4 Async / Await

Level 1
- Exercise: 1
Given the employee and salary objects, create an arrow function getEmployee that returns a Promise by searching the object for its id. Create another getSalary arrow function that receives an employee object as a parameter and returns its salary.


- Exercise: 2
Create an asynchronous function that receives an employee ID and print the employee's name and salary on the screen, using the functions you defined in the previous exercise.

Level 2
- Exercise: 1
Creates a new asynchronous function that calls another to return a Promise that performs its resolve () function after 2 seconds of its invocation.

Level 3
- Exercise: 1
Capture all possible level 1 and 2 bugs.

## 5 Node Utils
Level 1
- Exercise: 1
Creates a function that recursively prints a message through the console with one-second delays.

- Exercise: 2
Creates a function that, when executed, writes a sentence to a file.

- Exercise: 3
Create another function that displays the contents of the file from the previous exercise as a console.

Level 2
- Exercise: 1
Create a function that compresses the level 1 file.

- Exercise: 2 
Creates a function that lists the contents of the computer user directory for the console using Node Child Processes.

Level 3
- Exercise 1: 
  
    - Create a function that creates two hexadecimal and base64 encoded files , respectively, from the level 1 file.

    - Create a function that saves the files from the previous point, now encrypted with the aes-192-cbc algorithm , and delete the initial files

    - Create another function that decrypts and decrypts the files in the previous section by re-generating a copy of the initial
    Include a README with instructions for the execution of each part

    ## 6 Testing With Jest

- Level 1:
  - Create a file with add, subtract, multiply, and split two or more operands. Test the correct execution of these functions.
  - Create the corresponding tests to verify the operation of the Async / Await Level 1 exercise - Exercise 1
  - Create the corresponding tests to verify the operation of the Async / Await Level 2 exercise - Exercise 1
  - Create the corresponding tests to verify the operation of the Promises & Callbacks exercise Level 2 - Exercise 3
  - Test the execution of Async / Await Level 2 Exercise 1 using Jest Fake Timers .
- Level 2
  - Create a mock that checks the calls to the Persona class builder and his method say Number in Exercise Classes & Arrow Functions - Level 2 Exercise 2
  -  Verify by tests the exercise Classes & Arrow Functions Level 3 - Exercise 1 .
- Level 3
  - Redo the Async / Await Level 1 exercise by accessing an external JSON file. Create tests that demonstrate the correct execution of the exercise by mocking  the JSON file .
  - Using Async / Await Levels 2 and 3 as a basis , create a test that forces performance errors and verifies that the error thrown by the function is as expected.