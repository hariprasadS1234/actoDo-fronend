import ListToDo from "./listToDo"
import AddToDo from "./addToDo"
import { useState } from "react"
function ToDo() {
    const [activityArr,setActivityArr]= useState([])
    return (<div className="flex gap-4  mt-4">

        <AddToDo activityArr={activityArr} setActivityArr={setActivityArr}></AddToDo>
        <ListToDo activityArr={activityArr} setActivityArr={setActivityArr}></ListToDo>
    </div>


    )
}
export default ToDo