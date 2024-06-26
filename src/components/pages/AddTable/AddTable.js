import { Container } from "react-bootstrap";
import AddTableForm from "../../features/AddTableForm/AddTableForm";

const AddTable = () => {
    return(
        <Container className="m-2 p-4">
            <h2>Add new table</h2>
            <AddTableForm />
        </Container>
       
    )
}

export default AddTable;