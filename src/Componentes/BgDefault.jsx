import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function BgDefault(props) {
    const navigate = useNavigate();
    const handleNavError = () => {
        navigate('/error')
    }
    return (
        <div class="contenedorAutos">
            <h2 className="tituloCar">MODEL {props.model}</h2>
            <div className="propertiesContainer">
                <h3> Engine: {props.motor} <br /> <br /> Horsepower: {props.horsepower} <br /><br /> Autopilot: {props.autopilot} </h3>
            </div>
            <Button onClick={handleNavError} className="btt-generico my-1" variant="dark" >BUY</Button>{' '}
        </div>
    )

}

export default BgDefault