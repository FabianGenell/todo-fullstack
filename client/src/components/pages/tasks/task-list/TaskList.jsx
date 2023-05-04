import React, { useEffect, useState } from "react";

import './TaskList.css';
import TaskListEntry from "./TaskListEntry";
import { getTasks } from "../../../../service/taskService";
import CreateTask from "./CreateTask";
import EditTask from "./EditTask";

export default function TaskListContainer() {
    const [tasks, setTasks] = useState();
    const [editingTask, setEditingTask] = useState();

    useEffect(() => {
        getTasks().then((response) => {
            setTasks(response.data);
        });
    }, [])

    const TaskState = {
        set: (task) => {
            const newTaskArray = tasks.map((t) => t.id === task.id ? task : t);
            setTasks(newTaskArray);
        },
        create: (task) => {
            const newTaskArray = [...tasks, task]
            setTasks(newTaskArray);
        },
        delete: (task) => {
            const newTaskArray = tasks.filter((t) => t.id !== task.id);
            setTasks(newTaskArray);
        }
    }

    //!seperation of interests?
    return <>
        {editingTask && <EditTask editingTaskState={[editingTask, setEditingTask]} TaskState={TaskState} />}
        <div className="task-list">
            <CreateTask TaskState={TaskState} />
            {tasks && tasks.map(task =>
                <TaskListEntry TaskState={TaskState} task={task} key={task.id} onClick={() => setEditingTask(task)} />
            )}
        </div>

    </>;
}
