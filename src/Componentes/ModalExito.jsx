import { Button, Modal } from "react-bootstrap"

function ModalExito({ resp, msg, onClose }) {
    return (
        <div
            className="modal show p-1 "
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog className="custom-wrapper-modal" variant="dark">

                <Modal.Body className="m-1 custom-modal">
                    <p>{resp ? msg : msg}</p>
                    <Button className="btt-generico p-2" variant="dark" onClick={onClose}>Cerrar</Button>
                </Modal.Body>

                {/* <Modal.Footer>
                    <Button className="btt-generico p-2" variant="dark" onClick={onClose}>Cerrar</Button>
                </Modal.Footer> */}
            </Modal.Dialog>
        </div>
    )
}

export default ModalExito