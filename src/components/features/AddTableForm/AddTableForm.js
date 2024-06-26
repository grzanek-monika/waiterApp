import { Container, Form } from "react-bootstrap";
import { useState } from "react";

const AddTableForm = () => {
    const [nr, setNr] = useState('');
    return(
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Table number: </Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form>
        </Container>
    )
}

export default AddTableForm;