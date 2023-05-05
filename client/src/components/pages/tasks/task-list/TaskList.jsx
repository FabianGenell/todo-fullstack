import React, { useEffect, useState } from "react";

import './TaskList.css';
import TaskListEntry from "./TaskListEntry";
import { getTasks } from "../../../../service/taskService";
import CreateTask from "./CreateTask";
import EditTask from "./EditTask";

export default function TaskListContainer() {
    const [tasks, setTasks] = useState();
    const [completedTasks, setCompletedTasks] = useState();
    const [dueTasks, setDueTasks] = useState();
    const [editingTask, setEditingTask] = useState();

    useEffect(() => {
        getTasks().then((response) => {
            setTasks(response.data);
        });
    }, [])

    useEffect(() => {
        const completed = [];
        const due = [];
        tasks && tasks.forEach(task => { task.completed ? completed.push(task) : due.push(task) });
        setCompletedTasks(completed);
        setDueTasks(due);
        console.log({ completed, due })
    }, [tasks])

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

    return <>
        {editingTask && <EditTask editingTaskState={[editingTask, setEditingTask]} TaskState={TaskState} />}
        <div className="task-list">
            <CreateTask TaskState={TaskState} />
            {tasks && <>
                {dueTasks.length > 0 && <span>Tasks - {dueTasks.length}</span>}
                {(dueTasks.map(task =>
                    <TaskListEntry TaskState={TaskState} task={task} key={task.id} setEditingTask={setEditingTask} />
                ))}

                {completedTasks.length > 0 && <span>Completed - {completedTasks.length}</span>}
                {(completedTasks.map(task =>
                    <TaskListEntry TaskState={TaskState} task={task} key={task.id} setEditingTask={setEditingTask} />
                ))}
            </>}

        </div>

    </>;
}
