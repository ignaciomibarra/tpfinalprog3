import { useState } from 'react';
import ModalExito from '../Componentes/ModalExito';
// import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
// import MenuNavegacion from '../Componentes/MenuNavegacion';
import NavLoginRegister from '../Componentes/NavLoginRegister';


function Login() {

    // const [email, setEmail] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [showModal, setShowModal] = useState(false);
    const [loginExitoso, setLoginExitoso] = useState(false);

    // const navigate = useNavigate();


    const handleLogin = (user, password) => {
        //obtengo datos del local
        const datosUserArray = JSON.parse(localStorage.getItem('datosUserArray'));

        // Buscar el usuario en el array
        const usuario = datosUserArray.find(
            datosUser => datosUser.user === user && datosUser.password === password
        );

        //comparo datos con los del local
        if (usuario) {
            // Datos de inicio de sesión válidos
            setLoginExitoso(true);
            setShowModal(true);
            // navigate('/');
        } else {
            // Datos de inicio de sesión inválidos
            setLoginExitoso(false);
            setShowModal(true);
        }
    }

    const handleModalClose = () => {
        setShowModal(false);
    }


    let mensaje;
    if (loginExitoso) {
        mensaje = `Bienvenido,  ${user}!!`;
    } else {
        mensaje = 'Usuario y/o Contraseña incorrecto. Intente de nuevo'
    }
    return (
        <>
            <NavLoginRegister type="register" />

            <Container className='d-flex align-items-center flex-column mt-2'>
                <div className="custom-card-login">
                    <div className="custom-card-login2 d-flex align-items-center text-center">
                        <form
                            onSubmit={ev => {
                                ev.preventDefault();
                                handleLogin(user, password);
                            }}>
                            <h2>LOGIN</h2>
                            <Row className='d-flex justify-content-center flex-column align-items-center p-1'>
                                <Col xl={8} className='p-1 mx-2 px-5 '>
                                    <input
                                        className='input-generico p-2 m-2'
                                        type='user'
                                        name='user'
                                        placeholder='User'
                                        autoComplete='off'
                                        value={user}
                                        onChange={ev => setUser(ev.target.value)}
                                    ></input>
                                    <input
                                        className='input-generico p-2 m-2'
                                        type='password'
                                        name='password'
                                        placeholder='Contraseña'
                                        value={password}
                                        onChange={ev => setPassword(ev.target.value)}
                                    ></input>
                                </Col>
                                <Col xl={4} className='p-1 m-1'>
                                    <button className='btt-generico' type='submit'>Iniciar Sesión</button>
                                </Col>
                                {showModal && (
                                    <ModalExito
                                        msg={mensaje}
                                        onClose={handleModalClose}
                                    />
                                )}
                            </Row>
                        </form>

                    </div>

                </div>

            </Container>
        </>
    )
}

export default Login