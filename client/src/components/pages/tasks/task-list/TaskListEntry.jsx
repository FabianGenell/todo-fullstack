import React from "react";
import { BsCheck2, BsTrash3Fill, BsPencilFill } from "react-icons/bs"


import { deleteTask, updateTask } from "../../../../service/taskService";


export default function TaskListEntry({ task, TaskState, setEditingTask, ...props }) {

    function handleComplete(e) {
        e.stopPropagation()
        updateTask(task.id, { completed: !task.completed }).then((res) => TaskState.set(res.data))
    }

    function handleDelete(e) {
        e.stopPropagation()
        deleteTask(task.id).then(() => TaskState.delete(task))
    }

    function handleEdit(e) {
        e.stopPropagation();
        setEditingTask(task)
    }

    return <>
        <div onClick={handleComplete} className={["task-entry " + (task.completed && "completed")]} {...props}>
            <TaskCompletedTick onClick={handleComplete} completed={task.completed} />
            <h4 >{task.title}</h4>
            <div className="button-container">
                <BsPencilFill className="button" onClick={handleEdit} />
                <BsTrash3Fill className="button" onClick={handleDelete} />
            </div>
        </div>
    </>;

}


function TaskCompletedTick({ completed, ...props }) {
    return <div {...props} className={`task-completed-tick badge ${completed && "task-completed"}`}>
        {completed && <BsCheck2 color="var(--light-bg-color)" size="30px" />}
    </div >
}