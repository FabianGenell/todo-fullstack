import { HiMenu } from 'react-icons/hi'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"

import './header.css'

export default function Header() {

    const navigate = useNavigate();

    function logout() {
        window.sessionStorage.clear('authToken');
        navigate('/login');
    }

    return <header className='task-header'>
        <HiMenu size={30} className='icon' />
        <div className='logout-container'>
            <span onClick={logout}>Log out</span>
            <FaUserCircle size={30} />
        </div>
    </header>
}