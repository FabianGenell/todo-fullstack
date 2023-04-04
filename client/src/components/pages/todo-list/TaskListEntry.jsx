import React from "react";

export default function TaskListEntry({ task }) {

    return <>
        <div>
            <h1>{task.title}</h1>
        </div>
    </>;

}