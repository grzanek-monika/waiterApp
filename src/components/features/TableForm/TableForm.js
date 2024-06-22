import { Container, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import { tableStatuses } from "../../../redux/tableReducer";

const TableForm = props => {
    const [status, setStatus] = useState(props.status);
    const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount)
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
    const [bill, setBill] = useState(props.bill);
    return(
        <Container>
            <Form className="m-4 p-2">
                <Form.Group className="d-flex">
                    <Form.Label className="m-2">
                        <b>Status: </b>
                    </Form.Label>
                    <Form.Select 
                        id='statusSelect'
                        style={{width: '25%'}}
                        value={status}
                        onChange={e => setStatus(e.target.value)}>
                        {tableStatuses.map(tableStatus => <option value={tableStatus}>{tableStatus}</option>)}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="d-flex align-items-center">
                    <Form.Label className="m-2">
                        <b>People: </b>
                    </Form.Label>
                    <div className="d-flex align-items-center">
                        <Form.Control 
                            type="number" 
                            className="m-2" 
                            style={{width: '15%'}} 
                            value={peopleAmount} 
                            onChange={e => setPeopleAmount(e.target.value)}>
                        </Form.Control> 
                        / 
                        <Form.Control 
                            type="number" 
                            className="m-2" 
                            style={{width: '15%'}} 
                            value={maxPeopleAmount} 
                            onChange={e => setMaxPeopleAmount(e.target.value)}>
                        </Form.Control>
                    </div>
                </Form.Group>
                <Form.Group className="d-flex align-items-center">
                    <Form.Label className="m-2">
                        <b>Bill: </b>
                        <span className="m-1">$</span>
                    </Form.Label>
                    <Form.Control 
                        type="number" 
                        style={{width: '10%'}} 
                        value={bill} 
                        onChange={e => setBill(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Form>
        </Container>
    )
}

TableForm.propTypes = {
    props: PropTypes.object.isRequired
}

export default TableForm;