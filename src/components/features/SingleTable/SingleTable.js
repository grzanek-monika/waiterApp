import { Container } from "react-bootstrap";
import { useParams, Navigate } from "react-router";
import { getPending, getTableById, editTableRequest, removeTableRequest } from "../../../redux/tableReducer";
import { useSelector, useDispatch } from "react-redux";
import TableForm from "../TableForm/TableForm";
import Loader from "../../common/Loader/Loader";
import ModalPage from "../ModalPage/ModalPage";

const SingleTable = () => {
    const {id} = useParams();
    const table = useSelector(state => getTableById(state, id));
    const loader = useSelector(getPending);
    const dispatch = useDispatch();
    const edit = table => {
        dispatch(editTableRequest({...table, id}));  
    }

    const remove = () => {
        dispatch(removeTableRequest(table.id))
    }
 
    if(!table) return <Navigate to='/' />
    else return(
        <Container className="m-4 p-2">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Table {table.nr}</h2>
                <ModalPage action={remove} />
            </div>
            {loader && <Loader />}
            {!loader && <TableForm action={edit} id={id} actionText='Edit' {...table} />}      
        </Container>
    )
}

export default SingleTable;