import './ButtonHome.css'
import { useNavigate } from 'react-router-dom';

export default function ButtonHome() {
    const value = "<"
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    return(
        <button className='button-home' onClick={goToHome}>
            {value}
        </button>
    )
} 