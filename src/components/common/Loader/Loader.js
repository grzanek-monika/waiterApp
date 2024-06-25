import { Spinner } from "react-bootstrap";

const Loader = () => {
    return(
        <div className="p-5 d-flex justify-content-center">
            <Spinner animation="border" variant="info" />
        </div>       
    )
}

export default Loader;