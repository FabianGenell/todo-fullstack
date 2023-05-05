import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"

import './header.css'

export default function Header({ setShowSidebar }) {

    const navigate = useNavigate();

    function logout() {
        window.sessionStorage.clear('authToken');
        navigate('/login');
    }

    return <header className='task-header'>
        <BsFillQuestionCircleFill size={30} className='icon' onClick={() => setShowSidebar(true)} />
        <div className='logout-container'>
            <span onClick={logout}>Log out</span>
            <FaUserCircle size={30} />
        </div>
    </header>
}