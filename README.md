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
    let allTasks = new ToDoList();
    let testToDo3 = new Task("Oreoluwa Sefunmi Mobolaji", "Read my books", "29/08/22", "3hrs 20 minutes", "I love reading", "Read your books, get a scholarship and make mama and papa proud");

    allTasks.addTask(testToDo3);

    Let testToDo4 = new Task("Zanaz Aderali Ema", "Read my books", "29/08/22", "3hrs 20 minutes", "I love reading", "Read your books, get a scholarship and make mama and papa proud");

    allTasks.addTask(testToDo4);


<!-- Now our lovely method works fine, we can even add in more tasks and our ToDoList database will accomodate it -->
