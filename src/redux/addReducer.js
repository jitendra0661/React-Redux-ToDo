let initialState = {
    taskList: [
    ]
}

function addReducer(state=initialState , action){
    switch (action.type) {
        case "add_task":
            let newTaskAdd = {
               taskList: [...state.taskList,{
                   id:state.taskList.length+1,
                   task:action.payload
               }]
            }
            return newTaskAdd;
        case "delete_task":
            let newTaskDelete = {
                taskList : state.taskList.filter((task)=>{
                    return task.id!=action.payload;
                })
            }    
            return newTaskDelete;
        default:
            return state;
    }
}

export default addReducer;