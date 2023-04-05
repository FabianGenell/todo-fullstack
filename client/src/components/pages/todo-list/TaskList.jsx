import React, { useEffect, useState } from "react";

import './TaskList.css';
import TaskListEntry from "./TaskListEntry";
import { getTasks } from "../../../service/taskService";

export default function TaskListContainer() {
    const [tasks, setTasks] = useState();


    useEffect(() => {
        getTasks().then((response) => {
            setTasks(response.data);
            console.log('Fetched all tasks:', response.data)
        });
    }, [])

    function setTask(task) {
        const newTaskArray = tasks.map((t) => t.id === task.id ? task : t);
        setTasks(newTaskArray);
    }

    //! Is this how I'm supposed to use seperation of interests? Because I can't really reuse this as I have it right now.
    return <TaskList setTask={setTask} tasks={tasks} />;

}

function TaskList({ tasks, setTask }) {
    return <div className="task-list">
        {tasks && tasks.map(task =>
            <TaskListEntry setTask={setTask} task={task} key={task.id} />
        )}
    </div>;
}