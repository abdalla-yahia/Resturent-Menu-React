import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Zoom,LightSpeed} from 'react-reveal';

function Cardmenu({ db,el }) {
    const menuCard = db.map(e => {
        return ( 
            <Zoom left>

                <Card key={e.id} className='my-2 d-flex flex-row cardbody'>
                    <LightSpeed right>
            <Card.Img style={{width:'350px',height:'230px'}} src={e.img } />
                    </LightSpeed>
        <Card.Body className='mx-3'>
                <Card.Title className='my-3'>
                            <div className='d-flex flex-row justify-content-between'>
                                <LightSpeed left>
                        <h2 style={{color:'#0d0050'}}>{ e.title}</h2>
                        <h2 style={{color:'#0Dcaff',fontWeight:'bolde'}}>{ e.price}</h2>

                                </LightSpeed>
                    </div>
        </Card.Title>
        <Card.Text className='my-3 lead'>
            {e.description}
                    </Card.Text>
                    {
                        e.img !== '404.jpg' ?
                        <Link to={'/product'}>
                            <Button className='my-3'  variant="info" onClick={()=>el(e)}>صفحة المنتج</Button>
                            </Link>
                            : null
                        }
        </Card.Body>
                </Card>
                </Zoom>
        )
    })
    return (
        <>
    {menuCard}
        </>
  );
}

export default Cardmenu;