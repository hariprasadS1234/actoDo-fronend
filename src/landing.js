import Header from "./header"
import Desc from './desc';
import ToDo from "./toDo";
import { useLocation } from "react-router-dom";


function Landed() {
    const location=useLocation()

    return (
        <div>
            <div className="bg-black p-14 rounded-xl m-8">
                <div className="bg-white p-8 rounded-xl">


                    <Header userFound={location.state.userName}></Header>
                    <div className="flex gap-2 text-center flex-wrap">
                        <Desc bg={"#5C6BC0"} head={"23'C"} desc={"Sunny day"}   ></Desc>
                        <Desc bg={"#FBBC05"} head={"20 December"} desc={"14:02:05"}></Desc>

                        <Desc bg={"#FF6400"} head={"Built Using"} desc={"React"}></Desc>
                    </div>
                 
                    <ToDo></ToDo>


                </div>
            </div>
        </div>)
}
export default Landed