import { Container } from "react-bootstrap";
import { useParams, Navigate } from "react-router";
import { getPending, getTableById } from "../../../redux/tableReducer";
import { useSelector } from "react-redux";
import TableForm from "../TableForm/TableForm";
import Loader from "../../common/Loader/Loader";

const SingleTable = () => {
    const {id} = useParams();
    const table = useSelector(state => getTableById(state, id));
    const loader = useSelector(getPending);
 
    if(!table) return <Navigate to='/' />
    else return(
        <Container className="m-4 p-2">
            <h2>Table {table.id}</h2>
            {loader && <Loader />}
            {!loader && <TableForm {...table} id={id} />}      
        </Container>
    )
}

export default SingleTable;