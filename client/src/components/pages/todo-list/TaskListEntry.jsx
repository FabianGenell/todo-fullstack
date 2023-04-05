import React from "react";
import { updateTask } from "../../../service/taskService";
// 
export default function TaskListEntry({ task, setTask }) {

    function handleClick() {
        updateTask(task.id, { completed: !task.completed }).then((res) => setTask(res.data))
    }

    return <>
        <div className="task-entry">
            <TaskCompletedTick onClick={handleClick} completed={task.completed} />
            <h4>{task.title}</h4>
        </div>
    </>;

}


function TaskCompletedTick({ completed, ...props }) {
    return <div {...props} className={`task-completed-tick ${completed && "task-completed"}`}></div >
}