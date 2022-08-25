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

// Function for editting TO-DO-List

function editTask(id){
    let theTasks = ToDoList.findTask(id);

    $("input#personsName").val(theTasks.personsName);
    $("input#taskName").val(theTasks.personsTask);
    $("input#taskDate").val(theTasks.dateOfTask);
    $("input#timeTaskTakes").val(theTasks.timeTaskWillTake);
    $("input#briefDescriptionAboutTask").val(brieflyDescribeTask);

    allTasks.deleteTask(id);
    $("#all-tasks-show").hide();
}

// A function to attach event listeners to our tasks
// so we want to attach event listeners for when we click on li it displays our tasks
// we could do that in vanilla javaScript by using onClick but jQuery seems easy


function attachTaskListeners(){
    $("ul#show-tasks").on("click", "li", function(){
        showTasks(this.id);
    });

    // function for deleting tasks( this function was still created later on, we just added event listeners to it here)

    $("#deleteTaskButton").on("click", ".deleteButton", function(){
        allTasks.deleteTask(this.id);
        $("#all-tasks-show").hide();
        displayTask(allTasks);
    });

    // function for editting tasks( this function was still created later on, we just added event listeners to it here)

    $("#editTaskButton").on("click", ".editButton", function(){
        editTask(this.id);
    });
}

// A powerful function that will take in object as a parameter and 
// bring out a and return a string of formatted li of all the contacts
// in ToDoList... this function was written in the uI logic 
// because we need our jQuery to select it 

function displayTask(displayToDoList){
    let myToDoList = $("ul#show-tasks");
    let htmlForTasksInfo = "";
    Object.keys(displayToDoList.tasks).forEach( function(key){
        const oneTask = displayToDoList.findTask(key);

        htmlForTasksInfo += "<li id=" + oneTask.id + ">" + oneTask.personsTask + "  task " + "</li>";
    });
    console.log(htmlForTasksInfo);
    myToDoList.html(htmlForTasksInfo);
}

// function for showTasks()

function showTasks(taskId){
    let task = ToDoList.findTask(taskId);

    $("#all-tasks-show").show();
    $(".usersName-show").html(task.personsName);
    $(".nameOfTask-show").html(task.personsTask);
    $(".dateOfTask-show").html(task.dateOfTask);
    $(".timeToCompleteTask-show").html(task.timeTaskWillTake);
    $(".describeTask-show").html(task.brieflyDescribeTask);

    // buttons for edit and delete
    let delButton = $("#deleteTaskButton");
    delButton.empty();
    delButton.html("<button class='deleteButton btn btn-danger' id=" + task.id + ">Delete</button>");

    let edButton = $("#editTaskButton");
    edButton.empty();
    edButton.html("<button class='editBUtton btn btn-success' id=" + task.id + ">Edit</button>");
}

// Function for resetting fields

function resetFields(){
    // resetting the fields in the form when user clicks on submit or edit
    $("input#personsName").val();
    $("input#taskName").val();
    $("input#taskDate").val();
    $("input#timeTaskTakes").val();
    $("input#briefDescriptionAboutTask").val();

}


// preventing default when user submits and saving our tasks in the UI logic

$(document).ready( function(){
    attachTaskListeners();

    $("#tasks-form").submit( function(e){
        e.preventDefault();

        let nameOfUser = $("#personsName").val();
        let taskOfUser = $("#taskName").val();
        let usersTaskDate = $("#taskDate").val();
        let timeTakesUser = $("#timeTaskTakes").val();
        let briefDescriptionOfTask = $("#briefDescriptionAboutTask").val();

        $("#personsName").val("");
        $("#taskName").val("");
        $("#taskDate").val("");
        $("#timeTaskTakes").val("");
        $("#briefDescriptionAboutTask").val("");

        // making new objects to save our task details in our UI logic

        let newTasks = new Task(nameOfUser, taskOfUser, usersTaskDate, timeTakesUser, briefDescriptionOfTask);


        // calling on the ToDoList variabe instantiator

        allTasks.addTask(newTasks);
        console.log(allTasks.newTasks);

        displayTask(allTasks);

        $(".task").last().click( function(){
            $("#all-tasks-show").show();
            $(".usersName-show").text(newTasks.nameOfUser);
            $(".nameOfTask-show").text(newTasks.taskOfUser);
            $(".dateOfTask-show").text(newTasks.usersTaskDate);
            $(".timeToCompleteTask-show").text(newTasks.timeTakesUser);
            $(".describeTask-show").text(newTasks.briefDescriptionOfTask);

        });

        resetFields();
        e.preventDefault();
        console.log(newTasks);

    });
});