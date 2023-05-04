import { HiMenu } from 'react-icons/hi'
import { FaUserCircle } from 'react-icons/fa'

import './header.css'

export default function Header() {
    return <header className='task-header'>
        <HiMenu size={30} className='icon' />
        <div className='logout-container'>
            <span>Log out</span>
            <FaUserCircle size={30} />
        </div>
    </header>
}