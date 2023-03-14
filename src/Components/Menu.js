import {Cardmenu, Titlemenu} from '.'
import { Container, Row, Col } from 'react-bootstrap';
import { db } from '../database';
import { useState,useEffect } from 'react';


function Menu({cat,e}) {
    const [data, setData] = useState([])
    const [category, setCategory] = useState([])
    const result = db.map(e => {
        return e.category
    })
    useEffect(() => {
        cat.length ? setData(cat):setData(db)
        setCategory(result)
    }, [cat])
    const filterMenu = (word) => {
        if (word === 'الكل') {
            setData(db)
        } else {
            
            const fi = db.filter(e => {
                return e.category === word
            })
            setData(fi)
        }
    }
    
    return (
        <Container>
            <Titlemenu cat={category} fun={filterMenu} />
            <Row>
                <Col sm={12}>
                    <Cardmenu db={data} el={e } />
                </Col>
                
            </Row>
        </Container>
        
    );
}

export default Menu;