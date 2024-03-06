import { useEffect, useState } from 'react';
import ModalExito from '../Componentes/ModalExito';
import { Col, Container, Row } from 'react-bootstrap';
import NavLoginRegister from '../Componentes/NavLoginRegister';

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const [showModal, setShowModal] = useState(false);
    const [registroExitoso, setRegistroExitoso] = useState(false);
    const [datosUserArray, setDatosUserArray] = useState([]);

    useEffect(() => {
        if (registroExitoso) {
            setShowModal(true);
        }
    }, [registroExitoso]);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleRegister = (email, password, user) => {
        const datosUser = { email, password, user }

        //Pregunto si ya existe un localStorage para recien guardar el nuevo user
        const existeLocal = localStorage.getItem('datosUserArray');

        if (existeLocal) {
            //verifico si existe el array en el localStorage, lo recupero y lo actualizo
            const datosParseados = JSON.parse(existeLocal)

            //verifico si existe tambien el nuevo user que se quiere registrar
            const userExists = datosParseados.some(item => item.user === user);
            if (userExists) {
                // El usuario ya existe, mostrar mensaje de error
                setRegistroExitoso(false);
                setShowModal(true);
                return;
            }

            //Actualizar el nuevo usuario al array
            const actualizarNewRegister = [...datosParseados, datosUser]
            // Guardar los datos actualizados en el localStorage
            localStorage.setItem('datosUserArray', JSON.stringify(actualizarNewRegister));


        } else {
            // Si no existe el array en el localStorage, creamos uno nuevo
            const newData = [datosUser];
            // Guardar los nuevos datos en el localStorage
            localStorage.setItem('datosUserArray', JSON.stringify(newData));
        }

        // Vaciar los campos de los inputs después de un registro exitoso
        setEmail('');
        setPassword('');
        setUser('');
        // Simular un registro exitoso
        setRegistroExitoso(true);
    };

    let mensaje;
    if (registroExitoso) {
        mensaje = `¡Bienvenido, ${user}! Tu registro ha sido exitoso.`;
    } else {
        mensaje = 'Hubo un problema en el registro o el Nuevo User ya existe. Inténtalo nuevamente.';
    }

    return (
        <>
            <NavLoginRegister type="login" />
            <Container className='d-flex align-items-center flex-column mt-2'>
                <div className="custom-card-login">
                    <div className="custom-card-login2 d-flex align-items-center text-center">
                        <form
                            onSubmit={ev => {
                                ev.preventDefault();
                                handleRegister(email, password, user);
                            }}>
                            <h2>REGISTER</h2>
                            <Row className='d-flex justify-content-center flex-column align-items-center p-1'>
                                <Col xl={8} className='p-1 mx-2 px-5 '>
                                    <input
                                        className='input-generico p-2 m-2'
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        required
                                        autoComplete='off'
                                        value={email}
                                        onChange={ev => setEmail(ev.target.value)}
                                    ></input>
                                    <input
                                        className='input-generico p-2 m-2'
                                        type='password'
                                        name='password'
                                        placeholder='Contraseña'
                                        required
                                        value={password}
                                        onChange={ev => setPassword(ev.target.value)}
                                    ></input>
                                    <input
                                        className='input-generico p-2 m-2'
                                        type='text'
                                        name='user'
                                        placeholder='Usuario'
                                        required
                                        autoComplete='off'
                                        value={user}
                                        onChange={ev => setUser(ev.target.value)}
                                    ></input>
                                </Col>

                                <Col xl={4} className='p-1 m-1'>
                                    <button className='btt-generico' type='submit'>Registrarse</button>
                                </Col>
                                {showModal && (
                                    <ModalExito
                                        resp={registroExitoso}
                                        onClose={handleModalClose}
                                        msg={mensaje}
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

export default Register