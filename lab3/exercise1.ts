let array :Array<string> = []
let addTask = (task :string)  :number =>  {
    array.push(task)
    console.log("Added " + task)
    return array.length;
}
let listAllTasks  = () : void =>  {
    if (array.length == 0)
        console.log("array is empty!")
    else
        array.forEach(x => console.log(x))
}

let removeTask = (task : string) : number => {
    let index = array.indexOf(task)
    array.splice(index, 1);
    return array.length;
}


addTask("test");
listAllTasks()
removeTask("test")
listAllTasks()
