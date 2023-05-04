import { BsCheck2 } from "react-icons/bs"
import './TaskCompletedTick.css'

export default function TaskCompletedTick({ completed, ...props }) {
    return <div {...props} className={`task-completed-tick badge ${completed && "task-completed"}`}>
        {completed && <BsCheck2 color="var(--light-bg-color)" size="30px" />}
    </div >
}