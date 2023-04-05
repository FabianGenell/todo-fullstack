import React, { useEffect, useState } from "react";

import './TaskList.css';
import TaskListEntry from "./TaskListEntry";
import { getTasks } from "../../../service/taskService";
import CreateTask from "./CreateTask";

export default function TaskListContainer() {
    const [tasks, setTasks] = useState();

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

    //! Is this how I'm supposed to use seperation of interests? Because I can't really reuse this as I have it right now.
    return <TaskList TaskState={TaskState} tasks={tasks} />;

}

function TaskList({ tasks, TaskState }) {
    return <div className="task-list">
        <CreateTask TaskState={TaskState} />
        {tasks && tasks.map(task =>
            <TaskListEntry TaskState={TaskState} task={task} key={task.id} />
        )}
    </div>;
}