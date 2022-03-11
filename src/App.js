import { Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import { Col, Row, ListGroup } from 'react-bootstrap';
export default App => {

    let [displayText, setDisplayText] = useState('0');


    


    let generateNumPad = () => {
        const DIGITS = ['0','1','2','3','4','5','6','7', '8', '9', '.', 'x', '/', '+', '-']
        const DIGIT_NAMES = ['zero','one','two','three','four','five','six','seven','eight', 'nine'];
        return DIGITS.map((digit) => {
            console.log(digit);
                for(let i = 0; i < DIGITS.length; i++){
                    switch(digit){
                        case '.':
                            return (<Button id={'decimal'}>{digit}</Button>);
                        case 'x':
                            return (<Button id={'multiply'}>{digit}</Button>);
                        case '/':
                            return (<Button id={'divide'}>{digit}</Button>);
                        case '+':
                            return (<Button id={'add'}>{digit}</Button>);
                        case '-':
                            return (<Button id={'subtract'}>{digit}</Button>);
                        default:
                            return (<Button key={DIGIT_NAMES[digit]} id={DIGIT_NAMES[digit]} 
                                            onClick={() => {
                                                console.log(displayText);
                                                displayText === '0' ? setDisplayText(digit) : setDisplayText(displayText + digit);
                                            }}>{digit}</Button>);
                    }  
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
                    <Row id='display' className="text-end">
                        <p id='displayText'>{displayText}</p>
                    </Row>
                    <Row className="text-center">
                        <Col xs={6}>
                         <Button id='clear' onClick={() => {setDisplayText('0')}}>AC</Button>
                        </Col>
                        <Col xs={6}>
                         <Button id="equals">=</Button>
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