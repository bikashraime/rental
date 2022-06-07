import { Button, Container } from "react-bootstrap";
import { Link, Routes, Route, useNavigate } from 'react-router-dom';


export const NotFoundPage = () => {

    const navigate = useNavigate();
    return (
        <div className="d-flex align-items-center justify-content-center" id="not_found_page" >
            <Button className="btn-danger" onClick={() => navigate(-1)} > Go Back </Button>
        </div >
    );
}