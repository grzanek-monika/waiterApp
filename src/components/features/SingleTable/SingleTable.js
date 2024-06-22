import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { getTableById } from "../../../redux/tableReducer";
import { useSelector } from "react-redux";
import TableForm from "../TableForm/TableForm";

const SingleTable = () => {
    const {id} = useParams();
    const table = useSelector(state => getTableById(state, id));
    return(
        <Container className="m-4 p-2">
            <h2>Table {table.id}</h2>
            <TableForm {...table} />
            
        </Container>
    )
}

export default SingleTable;