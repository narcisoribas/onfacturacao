import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./login.css"

export function Login(){
    return(
        <div className="loginContainer">
            
                <Row>
                    
                <Col md="6" className="welcome">
                        <Container>
                            <h1 className="mt-5">ONSoft</h1>

                        
                        </Container>
                    </Col>

                    <Col md={6} className="RowForm p-5">
                        <Container>
                          

                          <Form className="formLogin">

                            <input  
                                type="email"
                                placeholder="email..."
                                className="form-control p-3 col-md-3"

                                />

                                <input  
                                    type="password"
                                    placeholder="password"
                                    className="form-control mt-3 mb-3 p-3"
                                    />


                                    <Button 
                                        variant="primary"
                                        className="col-3"

                                    >
                                        Login
                                    </Button>
                                

                          </Form>
                          </Container>
                    </Col>

                    
                </Row>
          
        </div>
    )
}