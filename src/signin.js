import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
function Signin(props) {
    const navigate = useNavigate()
    const users = props.users
    const setUsers = props.setUsers
    const [uname, setUname] = useState("")
    const [pass, setPass] = useState("")
    const [userFound,setUserFound]=useState(true)

    const handleUname = (e) => {
        setUname(e.target.value)
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }
    const handleAdd = () => {
let found=false

        users.forEach((user) => {
            if (user.username === uname && user.password === pass) {
                console.log("login success")
                navigate("/landed", { state: { userName: uname } })
                setUserFound(true)
                found=true
            }
            

        });
        
        if (found===false) {
            console.log("login failed")
            setUserFound(false)
        }
    
    }
    
    return (
        <div className="bg-black p-10 m-3 rounded-xl">
            <div className="bg-white p-10 rounded-xl flex flex-col gap-1">
                <h1 className="text-4xl font-semibold">Hey, Hi...:)</h1>
                {userFound ?     (<p>I'm here to help you to manage your activities, please Signin</p>) :(<p className="text-red-400 ">Could not find Account, please Signup..</p>)
}
                <div>
                    <input type="text" placeholder="username" onChange={handleUname} value={uname} className="outline-none border border-black rounded-md p-1"></input>
                </div>
                <div>
                    <input type="text" placeholder="password" onChange={handlePass} value={pass} className="outline-none border border-black rounded-md p-1"></input>
                </div>

                <button className="p-1 rounded-md w-fit px-2 bg-purple-600" onClick={handleAdd}>Signin</button>
                <p>Don't have an account, please <Link to={"/signup"} className="text-purple-600 underline">Signup</Link></p>



            </div>

        </div>)
}
export default Signin