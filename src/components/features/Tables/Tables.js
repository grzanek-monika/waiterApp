import { Container, ListGroup, Button } from "react-bootstrap";
import { getAllTables } from "../../../redux/tableReducer";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../../common/Loader/Loader";
import { getPending } from "../../../redux/tableReducer";

const Tables = () => {
    const tables = useSelector(getAllTables);
    const loader = useSelector(getPending);
    
    console.log('tables:', tables);
    return(
        <Container>
            {loader && <Loader />}
            {!loader && <ListGroup>
                {tables.map(table => 
                    <ListGroup.Item className="d-flex align-items-center justify-content-between" key={table.id} {...table} >
                        <div className="d-flex align-items-center">
                            <h2 className="m-4">{`Table ${table.nr}`} </h2>
                            <b className="m-2">Status: </b> {table.status}
                        </div>
                        <div>
                            <Button as={NavLink} to={`/table/${table.id}`} variant="primary">Show more</Button>
                        </div>
                    </ListGroup.Item >)}
            </ListGroup>}
        </Container>
    )
}

export default Tables;