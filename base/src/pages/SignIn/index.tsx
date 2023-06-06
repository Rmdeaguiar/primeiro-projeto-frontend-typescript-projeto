import { Link } from 'react-router-dom';
//@ts-ignore
import Logo from '../../assets/logo.svg';
import './styles.css';

function SignIn(){
    return (
        <div className='container container-sign-in'>
            <div className='sign-in'>
            <img src={Logo} alt='Logo'/>

                <form>
                    <input type='text' placeholder='E-mail'/>
                    <input type='password' placeholder='Password'/>
                    <span>Não tem cadastro? 
                        <Link to="/sign-up"></Link>Clique aqui
                    </span>

                    <button className='btn-pink'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn