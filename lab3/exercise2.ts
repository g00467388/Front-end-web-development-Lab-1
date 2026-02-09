interface ITask {

 addTask(task :string) : number;
 listAllTasks() : void;
 removeTask(task :string) : number;


}
class Task implements ITask 
{
    array : Array<string> = [];
    addTask(task :string) : number {
    this.array.push(task)
    console.log("Added " + task)
    return this.array.length;
}
 listAllTasks() : void {
    if (this.array.length == 0)
        console.log("array is empty!")
    else
        this.array.forEach(x => console.log(x))
}

 removeTask(task :string) : number {
    let index = this.array.indexOf(task)
    this.array.splice(index, 1);
    return this.array.length;
}
    
}

let x = new Task(); 
x.addTask("new");
x.listAllTasks();
x.removeTask("new")
x.listAllTasks();