import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logoTesla from '../Img/logoTesla.png';


function NavLoginRegister(props) {

    let linkText = '';
    let linkPath = '';

    if (props.type === 'login') {
        linkText = 'Log In';
        linkPath = '/login';
    } else if (props.type === 'register') {
        linkText = 'Register';
        linkPath = '/register';
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Collapse className="justify-content-start">
                        <Navbar.Text>
                            <a href="/" > <img src={logoTesla} alt="" className='logoTesla' /> </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">
                        <Navbar.Text>
                            <Link to={linkPath}>{linkText}</Link>
                        </Navbar.Text>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavLoginRegister