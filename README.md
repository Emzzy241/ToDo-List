# TO DO LIST 1.0

#### made by Mojiboye Emmanuel

### An application where you can add in your upcoming tasks and check out each of them

### Technologies Used
* Git
* Html
* CSS
* BootStrap
* Javscript 
* jQuery
* Bootstrap
* JavaScript Objects
* JavaScript Mock databases


### Description
_This application is just like a normal and regular TODO app where you can add in as many of the upcoming tasks you have, you can delete it, edit it and save it: all thanks to my JavaScript Database_

## Setup/Installation
* _Open the directory._
* _Click on the index.html file._
_Note: the website is designed to run on a web browser just be sure you have one. _
* _That's all the installation process you need to carry out. Have fun while working with this application. If you think its cool, be sure to give the application a thumbs up_

## Known Bugs
_As at the launching of this Project there are zero bugs in it. But if you do find a bug in it, be sure to notify me via my various social media handles below_

## WEBSITE LINK
https://github.com/Emzzy241/Mad-Libs

## License 
Licensed under the GNU General Public License 
© 2022 _by Mojiboye Emmanuel_ All Rights Reserved.

## Contact
_Connect with me @Emmanuel.9944 on instagram and on all other social media pages all @Emmanuel Oluwole_



















<!-- All Test for the business Logic would be written below..... With TDD(Test Driven Development) we want to be able to break our project into pieces by doing its business logic first -->

<!-- One quick note is that for now they are no .html files so you might be wondering how and where I would be testing my business Logic functions: Don't worry we can use the Chrome Browser's console and you can also try out other places like the JSFIDDLE.net to test along with me.... Starting now -->


<!-- The first constructor is to determine all of our parameters are been saved with JavaScript objects-->


Describe: THe Constructor for adding in a new TO-DO(Task)

Test: It will test if users can add in a test to the constructor

Code: 
    let testToDo = new Task("Mojiboye Emmanuel OLuwole", "Wash Plates and Spoons", "01/09/22", "20 minutes", "My Mom told me to wash plates", "If you wash those plates today, you get the biggest Meat this night");

    let testToDo2 = new Task("Latifa Falila Adesewa", "Take Younger brother to school", "08/9/22", "50 minutes", "Younger Brother needs to go to School", "Younger Brother wants to study medicine");

    testToDo.personsName;

Expected Output: 'Mojiboye Emmanuel OLuwole'

<!-- Our test passed, moving on to the next -->

<!-- The second test to see if our database really stores our tasks -->

Describe: Making a mock database to be able to store in all our tasks

Test: It will test if our database is working with the Task constructor and if it actually stores in our tasks

Code:
<!-- Using a global variable for instantiating so this can be reused through out our entire code -->
<!-- Instantiating our ToDoList database -->
    let allTasks = new ToDoList();

    let testToDo = new Task("Mojioye Emmanuel OLuwole", "Wash Plates and Spoons", "01/09/22", "20 minutes", "My Mom told me to wash plates", "If you wash those plates today, you get the biggest Meat this night");

    let testToDo2 = new Task("Latifa Falila Adesewa", "Take Younger brother to school", "08/9/22", "50 minutes", "Younger Brother needs to go to School", "Younger Brother wants to study medicine");

<!-- After redefining our variables let us now add them manually -->
    allTasks.tasks.testToDo = testToDo;
    allTasks.tasks.testToDo2 = testToDo2;

Expected Output: The testToDo and testToDo2 task gets added to our database

<!-- To add in tasks we just use: "allTasks.tasks.testToDo = testToDo;", how about writing a method to make this easy-->


<!-- A method for adding tasks into our database and also using unique id's to identify these tasks -->

Describe: A method for adding tasks to our database

Test: It will  check if the method for adding tasks is truly adding tasks to our database


Code:
    let testToDo3 = new Task("Oreoluwa Sefunmi Mobolaji", "Read my books", "29/08/22", "3hrs 20 minutes", "I love reading", "Read your books, get a scholarship and make mama and papa proud");

    allTasks.addTask(testToDo3);

    let testToDo4 = new Task("Zanaz Aderali Ema", "Read my books", "29/08/22", "3hrs 20 minutes", "I love reading", "Read your books, get a scholarship and make mama and papa proud");

    allTasks.addTask(testToDo4);


<!-- Now our lovely method works fine, if you use allTasks; you see our curent id increased, as we see the id beside it we see the task and we can also access any detail of our choice by: 
allTasks.tasks[1]; or allTasks.tasks["1"];


 we can even add in more tasks and our ToDoList database will accomodate it -->


<!-- Next is a new method for finding contacts -->


Describe: A method for finding tasks in our database

Test: It will use the id of our task and check to see if its present in our database

Code: 
    allTasks.addTask(testToDo1);
    allTasks.addTask(testToDo2);
    allTasks.addTask(testToDo3);
    allTasks.addTask(testToDo4);

    let testToDo4 = new Task("Zanaz Aderali Ema", "Read my books", "29/08/22", "3hrs 20 minutes", "I love reading", "Read your books, get a scholarship and make mama and papa proud");

<!-- When we check now: we see that all of this are present in our database now -->
    allTasks.findTask(1);
    allTasks.findTask(2);
    allTasks.findTask(3);
    allTasks.findTask(4);

Expected Output: 
    true
    true
    true
    true

<!-- Quick note: there are two ways we can find tasksin our database now
1: allTasks.tasks[1]; or allTasks.tasks["1"];
2. allTasks.findTask(1); or allTasks.findTask("1");-->



<!-- The last method now for our database is a method for deleting Tasks -->

Describe: A method for deleting tasks from our database

Test: It will check to see if the task we want to delete is in our database, delete it if its there and if its not there, return false

Code: 
    let testToDo4 = new Task("Zanaz Aderali Ema", "Read my books", "29/08/22", "3hrs 20 minutes", "I love reading", "Read your books, get a scholarship and make mama and papa proud");

    allTask.addTask(4); or allTask.deleteTask("4");

<!-- When we check our database now by: allTasks.tasks;  the testToDo(4) gets deleted -->

Expected Output: The testToDo4 variable gets deleted from our database



<!-- Completely done with all the tests for my business logic -->