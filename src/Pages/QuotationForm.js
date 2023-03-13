import CityInput from "./Components/CityInput";
import DateInput from "./Components/DateInput";
import Title from "./Components/Title";
import React from "react";
import PersonInput from "./Components/PersonInput";
import {Button} from "react-bootstrap";
import "../Styles/quotationForm.css";


function QuotationForm(){
    return(
        <div className="page-form">
            <div className="container-fluid">
        <div className="card-form px-sm-4 col-6">
            <CityInput/>
            <DateInput/>
        <DateInput/>
            <PersonInput/>
            <Button className="btn-form">Calcola</Button>
        </div>
        </div>
        </div>
    )
}
export default QuotationForm;