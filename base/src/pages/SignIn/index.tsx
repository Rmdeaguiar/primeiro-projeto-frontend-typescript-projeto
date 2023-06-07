import { Link } from 'react-router-dom';
//@ts-ignore
import Logo from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';
import { FormEvent, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom'

function SignIn(){
    const navigate = useNavigate();
    const { handleGetToken, handleAddToken } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        try {
            if (!email || !password) {
              throw new Error('Email and password is required');
            }
            const response = await api.post('/login', {
                email,
                password
              });
              
            const { accessToken } = response.data;

            handleAddToken(accessToken);
            navigate('/main')

        } catch (error) {
            console.log(error)   
        }
    }

    useEffect(()=> {
        const token = handleGetToken();

        if(token){
            navigate('/main');
            return
        }

    }, [])


    return (
        <div className='container container-sign-in'>
            <div className='sign-in'>
            <img src={Logo} alt='Logo'/>

                <form onSubmit={handleSubmit}>
                    <input 
                    type='text' 
                    placeholder='E-mail' 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    />
                    <input 
                    type='password' 
                    placeholder='Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    />
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