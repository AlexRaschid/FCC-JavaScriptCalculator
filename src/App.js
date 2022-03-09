import { Button, Container } from 'react-bootstrap';

import { Col, Row, ListGroup } from 'react-bootstrap';
export default App => {

    let generateNumPad = () => {
        const DIGITS = ['1','2','3','4','5','6','7', '8', '9', '0', '.', 'x', '/', '+', '-']
    
        return DIGITS.map((digit) => {
            console.log(digit);
                for(let i = 0; i < DIGITS.length; i++){
                    return (
                            <Button>{digit}</Button>
                        
                    );
                }

        });
        
    }

    return (
        <Container fluid>
            <Row className="text-center">
                <h1>JS Calculator by Alexander Raschid</h1>
            </Row>
            <Row >
                <Container fluid>
                    <Row className="text-end">
                        <p>Result</p>
                    </Row>
                    <Row className="text-center">
                        <Col xs={6}>
                         <Button>AC</Button>
                        </Col>
                        <Col xs={6}>
                         <Button>=</Button>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col></Col>
                        <Col xs={8}>
                            {generateNumPad()}
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    );
}