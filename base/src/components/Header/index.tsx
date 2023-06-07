import './styles.css'
//@ts-ignore
import Logo from '../../assets/logo.svg'
//@ts-ignore
import ArrowBack from '../../assets/arrow-back.svg'
import { useNavigate } from 'react-router-dom'

type Props = {
    showBack?: boolean
}

function Header({showBack} : Props){
    const navigate = useNavigate();

    return(
        <header>
            {showBack && 
                <img 
                    className='arrow-back' 
                    src={ArrowBack} 
                    alt="arrow back"
                    onClick={()=> navigate(-1)}
                />
            }
            <img src={Logo} alt="logo"/>
        </header>
   )
}

export default Header;