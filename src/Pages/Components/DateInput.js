
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Title from "./Title";

function DateInput(props) {
    return (
        <Form controlId="date-input">
            <Form.Label>
                {props.title}
            </Form.Label>
            <Form.Control
            type="date"
            />
            </Form>

            );
        }

export default DateInput;