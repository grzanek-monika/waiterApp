import { Image } from "react-bootstrap";

const Loader = () => {
    return(
        <div className="p-5 d-flex justify-content-center">
            <Image 
                style={{width: '10%', height: '10%'}}
                src='https://cdn.pixabay.com/animation/2022/11/04/09/42/09-42-03-510_512.gif' />
        </div>       
    )
}

export default Loader;