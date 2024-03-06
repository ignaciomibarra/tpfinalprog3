import { Container, Row } from "react-bootstrap"
import logoTesla from '../Img/logoTesla.png';

function Footer() {
    return (
        <>
            <footer className="mt-0 p-0">
                <Container className="text-center">
                    <Row className="my-2">
                        <img src={logoTesla} className="logoFooter" alt=""></img>
                        <h6>Tesla &copy; All rights reserved</h6>
                    </Row>
                    {/* <Row className="my-2">
                    <BasicGroupButtons/>
                </Row> */}
                </Container>
            </footer>
        </>
    )
}

export default Footer