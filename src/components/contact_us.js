import { Button } from "bootstrap"
import { Col, Container, Form, Row, Text, Control } from "react-bootstrap"

export const ContactUs = (props) => {
    return (
        <div className="contact-bg">

            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <Form className='contact-card '>
                            <Form.Text className="text-bold">
                                <h3 className="text-black" style={{ fontWeight: "bold" }}>Contact</h3>
                            </Form.Text>
                            <hr />
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            {/* <Button variant="primary" type="submit">
                                Submit
                            </Button> */}
                        </Form>

                    </Col>
                    <Col sm={12} md={6}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}