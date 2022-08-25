// Starting the application

// A test for the business logic functions, the databases and constructors would be written in the README file before proceeding to the 
//  uI logic and its functions

// We need a database to store all of the information we get from the user, Let us make a mock one now

function ToDoList() {
    this.tasks = {};
    this.currentId = 0;
}

// Now the database is created, we can easily add things into it by allTasks.tasks.testToDo = testToDo;...... 
// Wouldn't it be a lot smarter if we could create a method for adding in these tasks
// This method would need a unique Id to identify our tasks for us..... One more new property for unique Id's would be added to our database

ToDoList.prototype.addTask = function (task) {
    task.id = this.assignId();
    this.tasks[task.id] = task; /* From our database now we create task.id(an id for our task) on a fly and assign it to task right after assigning
    the task.id to the assignId() function we created below*/
};


// this method will update this.currentId by 1 and then return the updated value. to our task.id in the addTask() function

ToDoList.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId; /* This function just increases this.currentId in our database by 1 whenever its been called, it never interferes with our addTask() function */
};

// Our function says that it should return the tasks in that id for us if its found or else return false

// THe findTask() method
ToDoList.prototype.findTask = function (id) {
    if (this.tasks[id] !== undefined) {
        return this.tasks[id];
    }
    return false;
};

// our method is just saying: if the id is found when we run the method on any Task object
// delete the entire task and its id and return true but if the id is not found, return false 

// the deleteTask Method

ToDoList.prototype.deleteTask = function (id) {
    if (this.tasks[id] === undefined) {
        return false;
    }
    delete this.tasks[id];
    return true;
};

// The first constructor is the format on how we will be adding in new tasks, a text would be written for it and it must be passed


function Task(personsName, personsTask, dateOfTask, timeTaskWillTake, brieflyDescribeTask) {
    this.personsName = personsName;
    this.personsTask = personsTask;
    this.dateOfTask = dateOfTask;
    this.timeTaskWillTake = timeTaskWillTake;
    this.brieflyDescribeTask = brieflyDescribeTask;
    
}

// Done with all functions for the business Logic, moving on to the userInterface logic


let allTasks = new ToDoList();



// The userInterface logic for my application

