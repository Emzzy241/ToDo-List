<!-- All Test for the business Logic would be written below..... With TDD(Test Driven Development) we want to be able to break our project into pieces by doing its business logic first -->

<!-- One quick note is that for now they are no .html files so you might be wondering how and where I would be testing my business Logic functions: Don't worry we can use the Chrome Browser's console and you can also try out other places like the JSFIDDLE.net to test along with me.... Starting now -->


<!-- The first constructor is to determine all of our parameters are been saved with JavaScript objects-->


Describe: THe Constructor for adding in a new TO-DO(Task)

Test: It will test if users can add in a test to the constructor

Code: 
    let testToDo = new Task("Mojioye Emmanuel OLuwole", "Wash Plates and Spoons", "01/09/22", "20 minutes", "My Mom told me to wash plates", "If you wash those plates today, you get the biggest Meat this night");

    let testToDo2 = new Task("Latifa Falila Adesewa", "Take Younger brother to school", "08/9/22", "50 minutes", "Younger Brother needs to go to School", "Younger Brother wants to study medicine");

    testToDo.personsName;

Expected Output: 'Mojioye Emmanuel OLuwole'

<!-- Our test passed, moving on to the next -->