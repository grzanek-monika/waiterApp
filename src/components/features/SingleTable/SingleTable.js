import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { getTableById } from "../../../redux/tablesReducer";
import { useSelector } from "react-redux";

const SingleTable = () => {
    const {id} = useParams();
    const table = useSelector(state => getTableById(state, id));
    return(
        <Container>
            <h2>Table {table.id}</h2>
            <Card style={{ width: '20rem' }}>
                <p><b>Status: </b>{table.status}</p>
                <p><b>People: </b>{table.peopleAmount} / {table.maxPeopleAmount}</p>
            </Card>
        </Container>
    )
}

export default SingleTable;