import React from "react";
import { Form } from 'react-bootstrap';

function DateInput(props) {
    return (
        <Form controlId="date-input">
            <Form.Control
            type="date"
            />
            </Form>

            );
        }

export default DateInput;