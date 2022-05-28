
import { Col, Container, Form, Row, Text, Control, Button } from "react-bootstrap";

export const ContactUs = (props) => {
    return (
        <div className="contact-bg">

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
                    </Col>
                </Row>
            </Container>
        </div>
    )
}