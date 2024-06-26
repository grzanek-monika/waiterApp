import { Container } from "react-bootstrap";
import TableForm from "../TableForm/TableForm";
import { addTableRequest } from "../../../redux/tableReducer";
import { useDispatch } from "react-redux";

const AddTableForm = () => {

    const dispatch = useDispatch();
    const add = table => {
        dispatch(addTableRequest(table));
    }
    return(
        <Container>
            <TableForm action={add} actionText='Add table' />
        </Container>
    )
}

export default AddTableForm;