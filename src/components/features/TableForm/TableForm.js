import { Container, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import { tableStatuses } from "../../../redux/tableReducer";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { editTableRequest } from "../../../redux/tableReducer";
import { useEffect } from "react";

const TableForm = ({id,  ...props}) => {
    const [status, setStatus] = useState(props.status);
    const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount)
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
    const [bill, setBill] = useState(props.bill);
    const [viewBill, setViewBill] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm(); 

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const edit = () => {
        dispatch(editTableRequest({status, peopleAmount, maxPeopleAmount, bill, id}));  
        navigate('/');
    }

    useEffect(() => {
        if(status !== "Busy")
            setViewBill(false)
    }, [status]);

    useEffect(() => {
        if(status === "Busy") {
            setBill(0);
            setViewBill(true)
        } 
        if(status !== "Busy") { 
            setViewBill(false);
        }
        if(status === "Free" || status === "Cleaning") {
            setPeopleAmount(0);
        }
    }, [status]);

    useEffect(() => {
        if(peopleAmount > maxPeopleAmount){
            setPeopleAmount(maxPeopleAmount);
        }
        if(peopleAmount < 0) {
            setPeopleAmount(0);
        }
        if(maxPeopleAmount < 0) {
            return setMaxPeopleAmount(0);
        }
    }, [peopleAmount, maxPeopleAmount]);

    useEffect(() => {
        if(bill < 0) {
            setBill(0);
        }
    }, [bill]);

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
                            {...register("peopleAmount", { min: 0, max: 10 })}
                            type="number"
                            className="m-2" 
                            style={{width: '15%'}} 
                            value={parseInt(peopleAmount)} 
                            onChange={e => setPeopleAmount(e.target.value)} />
                        {errors.peopleAmount 
                            && <small className="d-block form-text text-danger mt-2">
                                Value must be between 0 and 10
                                </small>
                        }
                        / 
                        <Form.Control 
                            {...register("maxPeopleAmount", {min: 0, max: 10})}
                            type="number" 
                            className="m-2" 
                            style={{width: '15%'}} 
                            value={maxPeopleAmount} 
                            onChange={e => setMaxPeopleAmount(e.target.value)} />
                        {errors.maxPeopleAmount 
                            && <small className="d-block form-text text-danger mt-2" >
                                Value must be between 0 and 10
                                </small>
                        }
                    </div>
                </Form.Group>
                {viewBill && <Form.Group className="d-flex align-items-center mt-2">
                    <Form.Label className="m-2">
                        <b>Bill: </b>
                        <span className="m-1">$</span>
                    </Form.Label>
                    <Form.Control 
                        {...register("bill", {min: 0 })}
                        type="number" 
                        style={{width: '10%'}} 
                        value={bill} 
                        onChange={e => setBill(e.target.value)} />
                    {errors.bill 
                            && <small className="d-block form-text text-danger mt-2" >
                                Min value is 0
                                </small>
                    }
                </Form.Group>}
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
    props: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
}

export default TableForm;