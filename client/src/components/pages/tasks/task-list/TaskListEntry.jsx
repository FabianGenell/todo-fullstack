import React from "react";
import { BsTrash3Fill, BsPencilFill } from "react-icons/bs"
import TaskCompletedTick from "./TaskCompletedTick";

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

