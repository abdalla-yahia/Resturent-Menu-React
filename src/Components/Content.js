import { Col, Container, Row } from 'react-bootstrap';
import {content} from '../database/content'
import { Slide } from 'react-reveal';
function Contents(props) {
    const db = content.map((e, index) => {
        if (index % 2 === 0) {
            
            return (
                <>
                <Slide left >
                        <Col sm={12} className='my-4'>
                            <img src={e.img} alt={e.title} className='w-50 my-5 fluied' />
                            <h1 className='lead fw-bold  fs-2' style={{color:"#0dcaf0"}}>{e.title }</h1>
                            <h1 className='lead fw-bold fs-5' style={{color:"#fff",opacity:.4,lineHeight:2,letterSpacing:'2px',textAlign:'start'}}>{e.description }</h1>
                        </Col>
                </Slide>
            </>
        )
        } else {
               return (
                <>
                <Slide right >
                        <Col sm={12} className='my-4'>
                            <img src={e.img} alt={e.title} className='w-50 my-5 fluied' />
                            <h1 className='lead fw-bold  fs-2' style={{color:"#0dcaf0"}}>{e.title }</h1>
                            <h1 className='lead fw-bold fs-5' style={{color:"#fff",opacity:.4,lineHeight:2,letterSpacing:'2px',textAlign:'start'}}>{e.description }</h1>
                        </Col>
                </Slide>
            </>
        )
    }
    })
    return (
                <Container className='my-5'>
                    <Row >
                    {db}
                    </Row>
            </Container>
    );
}

export default Contents;