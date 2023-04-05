import React, { useEffect, useState } from "react";

import './TaskList.css';
import TaskListEntry from "./TaskListEntry";
import { getTasks } from "../../../service/taskService";

export default function TaskListContainer() {
    const [tasks, setTasks] = useState();


    useEffect(() => {
        getTasks().then((response) => {
            setTasks(response.data);
        });
    }, [])
    //! Is this how I'm supposed to use seperation of interests? Because I can't really reuse this as I have it right now.
    return <TaskList tasks={tasks} />;

}

function TaskList({ tasks }) {
    return <div className="task-list">
        {tasks && tasks.map(task =>
            <TaskListEntry task={task} key={task.id} />
        )}
    </div>;
}