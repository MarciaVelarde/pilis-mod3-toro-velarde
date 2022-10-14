import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../contexts/UserContext';
import './Login.css'

const Login = () => {
    const { setCurrentUser } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        localStorage.setItem('currentUser', JSON.stringify(data))
        setCurrentUser(data)
        navigate('/')
    }
    return (
        <div className="sign-in-container">
            <span>Ingresar usuario y contraseña</span>
            <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
                <input 
                    className="input-form"
                    type="text"
                    placeholder="nombre de usuario"
                    { ...register('username', {
                        required : 'Ingrese su nombre de usuario'
                        }
                    )} 
                />
                <p>{errors.username?.message}</p>
                <input
                    className="input-form"
                    type='password'
                    placeholder="Contraseña"
                    {...register('password', {
                        required : 'Ingrese su contraseña'
                        }
                    )}
                />
                <p>{errors.password?.message}</p>
                <button className="btn-form" type="submit">Iniciar Sesion</button>
            </form>
        </div>
    )
}

export default Login;