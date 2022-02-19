import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../components/ContactForm';
import { FaFacebook, FaEnvelope } from "react-icons/fa";
//import '../../App.css';

function Contact() {
    return (
        <div className='container'>
            <div className='card-body'>
                {/* <div className="row ">
                    <img className='contactHero' src={} />
                </div> */}
            </div>
            <Container fluid className="shadow bg-light mb-5">
                <Container className="p-4">
                    <Row>
                        <Col>
                            <Container>
                                <h4>Contact Info</h4>
                                <p>
                                    <a href="mailto:odellken@aol.com">
                                        <span className="pr-3">
                                            <FaEnvelope />
                                        </span>
                                        odellken@aol.com
                                    </a>
                                </p>

                                <p>
                                    <a href="https://www.facebook.com" target='_blank'>
                                        <span className="pr-3">
                                            <FaFacebook />
                                        </span>
                                        Deltaville Rentals
                                    </a>
                                </p>
                            </Container>
                        </Col>

                        <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
                            <Container>
                                <h4 style={{ color: "#6667AB" }}>Need Help? Send Us a Message!</h4>
                                <ContactForm />
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Contact;