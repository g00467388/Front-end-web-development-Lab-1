// Define methods and variables required for classes that implement the ITask interface
interface ITask {
    taskArray : Array<string>;
    addTask(task :string) : number;
    listAllTasks() : void;
    removeTask(task :string) : number;
}

class Task implements ITask 
{
    taskArray : Array<string> = [];
    // add task to the array and added task to standard out
    addTask(task :string) : number {
        this.taskArray.push(task)
        console.log("Added " + task)
        return this.taskArray.length;
    }
    listAllTasks() : void {
        // If taskArray length is 0 do not loop over taskArray
        if (this.taskArray.length == 0)
            console.log("taskArray is empty!")
        // else print out each element in the taskArray
        else
            this.taskArray.forEach(x => console.log(x))
    }
    // Remove an element from the taskArray
    removeTask(task :string) : number {
        // find location of task
        let index = this.taskArray.indexOf(task)
        // Remove task by index
        this.taskArray.splice(index, 1);
        return this.taskArray.length;
    }
}

let x = new Task(); 
x.addTask("new");
x.listAllTasks();
x.removeTask("new")
x.listAllTasks();