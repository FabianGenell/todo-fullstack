import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import TaskListContainer from "./task-list/TaskList";
import { useState } from "react";



export default function TaskPage() {

    const [showSidebar, setShowSidebar] = useState(false)

    return <>
        {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
        <Header setShowSidebar={setShowSidebar} />
        <TaskListContainer />
    </>
}