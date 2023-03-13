
import { Form } from 'react-bootstrap';
function PersonInput() {
    return (
        <>
            <Form.Group controlId="formAdults">
                <Form.Label>Adulti:</Form.Label>
                <Form.Control
                    type="number"
                    min={1}
                    max={10}

                />
            </Form.Group>
            <Form.Group controlId="formChildren">
                <Form.Label>Bambini:</Form.Label>
                <Form.Control
                    type="number"
                    min={0}
                    max={5}
                />
            </Form.Group>
        </>
    );
}

export default PersonInput;
