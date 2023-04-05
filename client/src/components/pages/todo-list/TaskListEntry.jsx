import React from "react";


export default function TaskListEntry({ task }) {

    return <>
        <div className="task-entry">
            <TaskCompletedTick completed={task.completed} />
            <h4>{task.title}</h4>
        </div>
    </>;

}


function TaskCompletedTick({ completed }) {
    return <div className={`task-completed-tick ${completed && "task-completed"}`}></div >
}