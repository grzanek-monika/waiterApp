import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const ModalPage = ({action}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
      <Button className="m-5 p-2" variant="primary" onClick={handleShow}>
        Remove
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completely remove this table from the app.  
        Are you sure you want to do that?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={action}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default ModalPage;