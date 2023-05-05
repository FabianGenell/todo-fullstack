import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai"

import { createTask } from "../../../../service/taskService";
// 
export default function CreateTask({ TaskState }) {

    const [title, setTitle] = useState("");

    function handleCreate(e) {
        if (title.length < 1) return;
        createTask({ title }).then((res) => TaskState.create(res.data));
        setTitle("")
        e.preventDefault();
    }

    return <form onSubmit={handleCreate}>
        <label htmlFor="create-task-input" className="create-task">

            <div
                className="badge"
                onClick={handleCreate}
            >
                <AiOutlinePlus color="var(--light-bg-color)" />
            </div>

            <input
                type="text"
                name="create-task-input"
                id="create-task-input"
                placeholder="Add a task"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                maxLength="1023"
                autoComplete="off"
            />
        </label>
    </form>;

}


