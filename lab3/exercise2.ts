interface ITask {

 addTask2(task :string) : number;
 listAllTasks() : void;
 removeTask(task :string) : number;


}
class Task implements ITask 
{
  addTask2(task :string) : number {

    array.push(task)
    console.log("Added " + task)
    return array.length;
}
 listAllTasks() : void {
    if (array.length == 0)
        console.log("array is empty!")
    else
        array.forEach(x => console.log(x))
}

 removeTask(task :string) : number {
    let index = array.indexOf(task)
    array.splice(index, 1);
    return array.length;
}
    
}