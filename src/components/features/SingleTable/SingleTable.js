import { Container } from "react-bootstrap";
import { useParams, Navigate } from "react-router";
import { getPending, getTableById, editTableRequest } from "../../../redux/tableReducer";
import { useSelector, useDispatch } from "react-redux";
import TableForm from "../TableForm/TableForm";
import Loader from "../../common/Loader/Loader";

const SingleTable = () => {
    const {id} = useParams();
    const table = useSelector(state => getTableById(state, id));
    const loader = useSelector(getPending);
    const dispatch = useDispatch();
    const edit = table => {
        dispatch(editTableRequest({...table, id}));  
    }
 
    if(!table) return <Navigate to='/' />
    else return(
        <Container className="m-4 p-2">
            <h2>Table {table.nr}</h2>
            {loader && <Loader />}
            {!loader && <TableForm action={edit} id={id} actionText='Edit' {...table} />}      
        </Container>
    )
}

export default SingleTable;