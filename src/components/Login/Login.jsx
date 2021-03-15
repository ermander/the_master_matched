import React, { Component } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';

import "./login.css"

class Login extends Component {
    render() {
        return (
            <>
            <Container fluid className="loginContainer">
                <Row className="no-gutters">
                    <Col xs={12} className="mt-4">
                        <Container id="loginImageContainer">
                            <Image id="loginLogo" src="https://res.cloudinary.com/dnadfuxk0/image/upload/v1615767803/photo_2021-03-15_01-12-53_nhmrr2.jpg" />
                        </Container>
                    </Col>
                </Row>
                <Row className="mt-3 no-gutters">
                    <Col xs={12}>
                        <Container style={{textAlign: "center"}}>
                            <Form.Group className="loginForm">
                                <Form.Label> </Form.Label>
                                <Form.Control type="email" placeholder="Inserire la email" />
                            </Form.Group>
                        </Container>                        
                    </Col>
                </Row>
                <Row className="no-gutters">
                    <Col xs={12}>
                        <Container style={{textAlign: "center"}}>
                            <Form.Group className="loginForm">
                                <Form.Label> </Form.Label>
                                <Form.Control type="password" placeholder="Inserire la password" />
                            </Form.Group>
                        </Container>                        
                    </Col>
                </Row>
                <Row className="no-gutters">
                    <Col xs={12}>
                        <Container style={{textAlign: "center"}}>
                            <Button id="registrationButton" className="mt-3" variant="dark">
                                Log In!
                            </Button>
                        </Container>
                    </Col>
                </Row>   
            </Container>
            </>
        );
    }
}

export default Login;