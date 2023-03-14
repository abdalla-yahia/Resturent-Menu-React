import Cursel from "./Cursel";
import Contents from "./Content";
import { Container } from "react-bootstrap";
function Home(props) {
    return (
        <>
                <Container className="d-flex flex-column">
            <Cursel />
            <div style={{ margine: '20px' }}>
            <h1 style={{color:'#0dcaf0',fontSize:'35px' }}>مرحباً بكم في مطعم الأندلس </h1>
            </div>
            <Contents />
                </Container>
        </>
    );
}

export default Home;