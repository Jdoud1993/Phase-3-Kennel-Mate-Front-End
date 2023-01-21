import Carousel from 'react-bootstrap/Carousel';

function CarouselFaded() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.hpm.io/wp-content/uploads/2019/06/25143552/Dogs.jpg"
          alt="First slide"
          style={{maxWidth: '100%', maxHeight: '400px', objectFit: 'contain'}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gannett-cdn.com/presto/2022/08/29/PVCS/2a4037e1-4084-487a-83a7-65077fde8a86-IMG_3909.jpg"
          alt="Second slide"
          style={{maxWidth: '100%', maxHeight: '400px', objectFit: 'contain'}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gannett-cdn.com/presto/2022/08/29/PVCS/2a4037e1-4084-487a-83a7-65077fde8a86-IMG_3909.jpg"
          alt="Third slide"
          style={{maxWidth: '100%', maxHeight: '400px', objectFit: 'contain'}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFaded;