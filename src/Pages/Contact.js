import Form from 'react-bootstrap/Form';
import "../Styles/Contact.css";
import {Button} from "react-bootstrap";
import React from "react";

function Contact(){
    return(
        <div className="page-contact">
            <div className="container-fluid">
                <div className="card-contact px-sm-4 col-6">
                    <div className='col-lg-5'>
                        <iframe title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89547.2776302214!2d9.095160217857808!3d45.
                                462704104120164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                                1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sMilano%20MI!5e0!3m2!1sit!2sit!4v1678803326890!5m2!1sit!2sit"
                                className='h-100 w-100'
                            style={{ border: '0' }}
                            loading='lazy'
                        ></iframe>
                    </div>
                    <hr/>
                    <h5>Telefono</h5>
                    <p>+00 000 000 0000</p>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Your message" />
                    </Form.Group>
                    <Button className="btn-form">Invia</Button>

                </div>
            </div>
        </div>

    )
}
export default Contact;

