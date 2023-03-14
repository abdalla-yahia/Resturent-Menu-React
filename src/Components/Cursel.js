import { Carousel } from "react-bootstrap";

function Cursel(props) {
    return (
        <>
        <Carousel style={{height:'100vh'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="12.jpg"
                        alt="First slide"
                        style={{height:'550px'}}
        />
        <Carousel.Caption>
          <h3 style={{color:'#00f3f0'}} className="lead fs-2 fw-bold">أكل صحي ممتع</h3>
          <p style={{color:'#00f3f0'}} className="lead fs-2 fw-bold">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="8.jpg"
                        alt="Second slide"
                        style={{height:'550px'}}
        />

        <Carousel.Caption>
          <h3 style={{color:'#00f3f0'}} className="lead fs-2 fw-bold">تتواجد لدينا كل الأطباق</h3>
          <p style={{color:'#00f3f0'}} className="lead fs-2 fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="14.jpg"
                        alt="Third slide"
                        style={{height:'550px'}}
        />

        <Carousel.Caption>
          <h3 style={{color:'#00f3f0'}} className="lead fs-2 fw-bold">متعة التذوق تجدها هنا</h3>
          <p style={{color:'#00f3f0'}} className="lead fs-2 fw-bold">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    );
}

export default Cursel;