function ToDo (title,description,dueDate,priority){
    const printToDo = ()=>{
        console.log(title,description,dueDate,priority);
    }
    return{
        title,
        description,
        dueDate,
        priority,
        printToDo,
    }

}


export default ToDo;