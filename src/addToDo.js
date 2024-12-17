import { useState } from "react"
function AddToDo(props){
const activityArr=props.activityArr
const setActivityArr=props.setActivityArr
const [inputValue,setInputValue]=useState()
const handleInput=(e)=>{
    setInputValue(e.target.value)
}
const handleAdd=()=>{
    setActivityArr([...activityArr,inputValue])
    setInputValue("")
}
    return(
        <div>
            <input type="text" value={inputValue} onChange={handleInput} className="border-black border p-1" style={{outline:"none"}}></ input>
            <button className="bg-black text-white border border-black p-1" onClick={handleAdd}>Add</button>
        </div>

    )
}
export default AddToDo