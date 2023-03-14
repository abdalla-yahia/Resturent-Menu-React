import { Button, Card, Col, Container, Row} from 'react-bootstrap';
import { useState,useEffect } from 'react';
import {Slide} from 'react-reveal';
function Productdetails({ e }) {
    
    const [state, setstate] = useState({
            id:Math.floor(Math.random() * 16505),img:'4.jpg',title:'وجبة فطار' ,description:'وجبة صحية نافعة تحتوي على كل المكونات التي يحتاجها البدن',price:'20 جنية ' ,category:'فطار'})
    useEffect(() => {
        if (Object.values(e).length > 0) setstate(e)
        
    },[])
    return (
        <Container>
            <Row>
                <Col>

        <Card key={state.id} className='my-2 d-flex flex-column cardbody align-items-center'>
            <Card.Img style={{minWidth:'100%',height:'350px'}} src={state.img } />
                    <Slide bottom cascade>
        <Card.Body className='mx-3 my-4'>
                <Card.Title className='my-3 '>
                    <div className='d-flex flex-row justify-content-between'>
                        <h2>{ state.title}</h2>
                        <Button variant='info' >{ state.price}</Button>
                    </div>
        </Card.Title>
        <Card.Text className='my-3'>
            {state.description}
                    </Card.Text>
        </Card.Body>
                    </Slide>
                        <Button variant='info' className='w-100' >أطلب الأن</Button>
            </Card>
            </Col>
            </Row>
        </Container>
    );
}

export default Productdetails;