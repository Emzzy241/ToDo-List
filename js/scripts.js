// Starting the application

// A test for the business logic functions, the databases and constructors would be written in the README file before proceeding to the 
//  uI logic and its functions

// We need a database to store all of the information we get from the user, Let us make a mock one now

function ToDoList(){
    this.tasks = {};

}

// Now the database is created, we can easily add things into it by 


// The first constructor is for hoe we will be adding in new tasks, a text would be written for it and it must be passed


function Task(personsName, personsTask, dateOfTask, timeTaskWillTake, brieflyDescribeTask, motivationOnTask){
    this.personsName = personsName;
    this.personsTask = personsTask;
    this.dateOfTask = dateOfTask;
    this.timeTaskWillTake = timeTaskWillTake;
    this.brieflyDescribeTask = brieflyDescribeTask;
    this.motivationOnTask = motivationOnTask;
}


