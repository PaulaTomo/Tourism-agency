import Form from 'react-bootstrap/Form';

function CityInput() {
    return (
        <Form.Select aria-label="Destination" placeholder="Destination">
            <option>Destinations</option>
            <option value="1">Parigi</option>
            <option value="2">Londra</option>
            <option value="3">Malta</option>
            <option value="4">Barcelona</option>
            <option value="5">Roma</option>
            <option value="6">Helsinki</option>
            <option value="7">Dubai</option>
            <option value="8">Istanbul</option>
            <option value="9">Amsterdam</option>
            <option value="10">Lisbona</option>

        </Form.Select>
    );
}

export default CityInput;