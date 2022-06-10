
import { Col, Container, Form, Row, Text, Control, Button } from "react-bootstrap";

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'



export const ContactUs = (props) => {
    const position = [26.4525, 87.2718];
    return (
        <div className="contact-bg" id="contact" style={{ paddingTop: 60 }}>

            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <Form className='contact-card '>
                            <Form.Text className="text-bold">
                                <h3 className="text-black" style={{ fontWeight: "bold" }}>Contact Us</h3>
                            </Form.Text>
                            <hr />
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll reach back to you.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Phone number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control type="text" as="textarea" rows={5} placeholder="Message" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Send
                            </Button>
                        </Form>

                    </Col>
                    <Col sm={12} md={6}>
                        <div className="map-box  contact-card p-0">
                            <MapContainer className="map-box" center={position} zoom={13} scrollWheelZoom={true} attributionControl={false}>
                                <TileLayer className="map-box" url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <Marker position={position}>
                                    <Popup>
                                        Subha Rents
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}