import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

function AddTask(props) {
    const [value, setValue] = useState("");

    return (
        <div>
            <div>
                <input value={value}  onChange={(e)=>{setValue(e.target.value)}}></input>
                <button onClick={() => {
                    
                    props.addTask(value);
                    setValue("");
                }}>Addtask</button>
            </div>
            <div>
                {props.taskList.length>0?
                props.taskList.map((task)=>{
                  return  (<>
                  <li key={task.id}>{task.task}</li>
                  <button onClick={()=>{
                      console.log(task.id);
                      props.deleteTask(task.id);
                  }}>Delete</button>
                   </>     
                    )   
                }):<div></div>}
            </div>    


        </div>
    )
}

const mapStateToProps = store => {
    return store.Add;
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (val) => {
            dispatch({
                type: "add_task",
                payload: val
            })
        },
        deleteTask: (val) => {
            dispatch ({
                type:"delete_task",
                payload:val
                
            })
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(AddTask)