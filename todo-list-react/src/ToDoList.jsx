import React,{useState} from "react";
function ToDoList(){
    const [tasks,setTasks]=useState(["Eat Breakfat","Take a shower","Walk the dog"]);
    const [newTasks,setNewTasks]=useState("");
    function handleInputChange(event){
        setNewTasks(event.target.value);
    }
    function addTask(){
        if(newTasks.trim()!=""){
            setTasks(t=>[...tasks,newTasks]);
            setNewTasks("");
        }
        
    }
    function deleteTask(index){
            const updatedTasks=tasks.filter((_,i)=>i!==index);
            setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        
        if(index > 0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTakDown(index){
        if(index < tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(<>
    <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input
            type="text"
            value={newTasks}
            placeholder="Type a task.."
            onChange={handleInputChange}></input>
            <button className="add-button" onClick={addTask}>ADD</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}><span className="text">{task}</span>
            <button className="delete-button" onClick={()=>deleteTask(index)}>DELETE</button>
            <button className="move-button" onClick={()=>moveTaskUp(index)}>👆</button>
            <button className="move-button" onClick={()=>moveTakDown(index)}>👇</button>
            </li>)}
        </ol>
    </div>
    </>);
}
export default ToDoList;