function ListToDo(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
    const handleDelete = (removeIndex) => {
        const result = activityArr.filter((item, index) => {
            if (index === removeIndex) {
                return false
            } else {
                return true
            }
        })
        setActivityArr(result)

    }
    return (

        <div className="bg-[#5C6BC0] p-2 rounded-xl " style={{ flexGrow: 1 }} >
            <h1 className="font-semibold text-2xl">Today's activity</h1>
            {activityArr.length===0? (<p>You don't have anything to do</p>):""}
            {activityArr.map((item, index) => {
                return (
                    <div className="flex justify-between items-center">
                        <p key={index}>{index + 1}.{item}</p>
                        <button className="text-red-900" onClick={() => handleDelete(index)}>Delete</button>
                    </div>)
            })
            }
        </div>


    )
}
export default ListToDo