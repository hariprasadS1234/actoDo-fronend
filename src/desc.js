function Desc(props){
    return(
        
        <div  style={{backgroundColor: props.bg}} className=" p-6 rounded-xl my-4 flex-grow   ">
            <h1 className="text-2xl text-black font-bold">{props.head}</h1>
            <p className="text-black">{props.desc}</p>

        </div>

    )
}
export default Desc