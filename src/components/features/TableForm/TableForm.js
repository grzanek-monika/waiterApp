import { Container, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import { tableStatuses, editTable } from "../../../redux/tableReducer";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { editTableRequest } from "../../../redux/tableReducer";

const TableForm = ({id,  ...props}) => {
    const [status, setStatus] = useState(props.status);
    const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount)
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
    const [bill, setBill] = useState(props.bill);

    const { register, handleSubmit, formState: { errors } } = useForm(); 

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const edit = () => {
        dispatch(editTableRequest({status, peopleAmount, maxPeopleAmount, bill, id}));  
        navigate('/');
    }

    return(
        <Container>
            <Form className="m-4 p-2" onSubmit={handleSubmit(edit)} >
                <Form.Group className="d-flex mt-2">
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
                <Form.Group className="d-flex align-items-center mt-2">
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
                <Form.Group className="d-flex align-items-center mt-2">
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
                <Button 
                    variant="primary" 
                    type="submit" 
                    className="mt-4">
                    Update
                </Button>
            </Form>
        </Container>
    )
}

TableForm.propTypes = {
    props: PropTypes.object.isRequired
}

export default TableForm;