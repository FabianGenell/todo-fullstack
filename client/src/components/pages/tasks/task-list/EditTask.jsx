import React, { useState } from "react"
import TextareaAutosize from 'react-textarea-autosize';
import { updateTask } from "../../../../service/taskService";

import "./EditTask.css";

export default function EditTask({ editingTaskState: [editingTask, setEditingTask], TaskState }) {


    const [task, setTask] = useState(editingTask)

    function handleChange(e) {
        const newTask = { ...task }
        newTask[e.target.name] = e.target.value;
        newTask.title = newTask.title.replace('\n', '');
        setTask(newTask)
        console.log(newTask)
    }

    function handeSubmit(e) {
        e.preventDefault();
        updateTask(task.id, task).then((res) => TaskState.set(res.data))
        setEditingTask(null)
    }

    return <div className="background" onClick={(e) => { setEditingTask(null); console.log(e.target) }}>
        <div className="edit-task">
            <form onSubmit={handeSubmit} onClick={(e) => { e.stopPropagation(); console.log(e.target) }}>
                <TextareaAutosize name="title" id="title" onChange={handleChange} value={task.title} />
                <TextareaAutosize name="description" id="description" onChange={handleChange} value={task.description || ""} />
                <input type="submit" value="Done" />
            </form>
        </div>
    </div>


}