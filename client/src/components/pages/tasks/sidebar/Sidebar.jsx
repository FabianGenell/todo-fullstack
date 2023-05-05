import { IoMdClose } from 'react-icons/io'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

import './sidebar.css'

export default function Sidebar({ setShowSidebar }) {
    return <div className='clickable-background' onClick={() => { setShowSidebar(false) }}>
        <div className='sidebar' onClick={(e) => { e.stopPropagation() }}>
            <IoMdClose size={30} className='close-button' onClick={() => setShowSidebar(false)} />
            <div className='text-area'>
                <h3>About The Project</h3>
                <p>
                    I'm excited to share my Full Stack Todo App project.
                    This project allowed me to learn and implement frontend
                    and backend technologies, focusing on building an
                    efficient and user-friendly todo app.
                </p>

                <p>
                    For the backend, I worked with Node.js, Express, and Sequelize,
                    using a PostgreSQL database to ensure a reliable foundation.
                    On the frontend, I employed React to develop a responsive and
                    interactive user interface. This project has been a valuable
                    learning experience and showcases my growing expertise in
                    modern web development
                </p>
                <a href="https://github.com/FabianGenell/todo-fullstack">Check out the repo</a>
            </div>

            <div className='credit'>
                <span>Made by Fabian Genell</span>
                <div className='links'>
                    <a href="https://github.com/FabianGenell/"><FaGithubSquare size={30} /></a>
                    <a href="https://www.linkedin.com/in/fabian-genell-0a4686246/"><FaLinkedin size={30} /></a>
                </div>
            </div>
        </div>
    </div>
}