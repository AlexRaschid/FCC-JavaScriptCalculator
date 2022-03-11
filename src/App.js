import { Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import { Col, Row, ListGroup } from 'react-bootstrap';
export default App => {

    let [displayText, setDisplayText] = useState('0');
    let [calculationString, setCalculationString] = useState('');

    


    let generateNumPad = () => {
        const DIGITS = ['0','1','2','3','4','5','6','7', '8', '9', '.', '*', '/', '+', '-']
        const DIGIT_NAMES = ['zero','one','two','three','four','five','six','seven','eight', 'nine'];
        return DIGITS.map((digit) => {
                for(let i = 0; i < DIGITS.length; i++){
                    switch(digit){
                        case '.':
                            return (<Button key={'decimal'} id={'decimal'}
                                            onClick={() => {
                                                
                                            
                                            }}>{digit}</Button>);
                        case '*':
                            return (<Button key={'multiply'} id={'multiply'}
                                            onClick={() => {
                                                setCalculationString(calculationString + displayText);
                                                setDisplayText(digit)
                                                //console.log(calculationString);
                                            
                                            }}>{digit}</Button>);
                        case '/':
                            return (<Button key={'divide'} id={'divide'}
                                            onClick={() => {
                                                setCalculationString(calculationString + displayText);
                                                setDisplayText(digit)
                                                //console.log(calculationString);
                                            
                                            }}>{digit}</Button>);
                        case '+':
                            return (<Button key={'add'} id={'add'}
                                            onClick={() => {
                                                if(displayText === '+'){
                                                    setDisplayText(digit)
                                                } else{
                                                    setDisplayText(digit)
                                                    setCalculationString(calculationString + displayText)
                                                }
                                                
                                                
                                                //console.log(calculationString);
                                            
                                            }}>{digit}</Button>);
                        case '-':
                            return (<Button key={'subtract'} id={'subtract'}
                                            onClick={() => {
                                                setCalculationString(calculationString + displayText);
                                                setDisplayText(digit)
                                                //console.log(calculationString);
                                              
                                            }}>{digit}</Button>);
                        default:
                            return (<Button key={DIGIT_NAMES[digit]} id={DIGIT_NAMES[digit]} 
                                            onClick={() => {
                                                console.log(displayText);
                                                if( displayText === '0' || 
                                                    displayText === '-' ||
                                                    displayText === '+' ||
                                                    displayText === '*' ||
                                                    displayText === '/'){
                                                    //setCalculationString(calculationString + displayText);
                                                    setCalculationString(displayText)
                                                    setDisplayText(digit)
                                                    console.log(calculationString);
                                                } else {
                                                    setDisplayText(displayText + digit);
                                                }
                                              
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
                         <Button id='clear' onClick={() => {
                             setDisplayText('0')
                             setCalculationString('')
                            }}>AC</Button>
                        </Col>
                        <Col xs={6}>
                         <Button id="equals" onClick={() => {
                             setCalculationString(calculationString + displayText);
                             setDisplayText('') 
                             console.log()
                            }}>=</Button>
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