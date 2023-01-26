import Carousel from 'react-bootstrap/Carousel';

function CarouselFaded() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.cityofsalinas.org/sites/default/files/departments_files/animal_services_files/puppy1.jpg"
          alt="First slide"
          style={{maxWidth: '100%', maxHeight: '800px', objectFit: 'contain'}}
        />
        <Carousel.Caption>
          <h3>Welcome to Kennel Mate</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://uknow.uky.edu/sites/default/files/styles/facebook/public/17-01-30%20Animal%20Shelter%20study%20-%20Photo.jpg?itok=kFZA0HEf"
          alt="Second slide"
          style={{maxWidth: '100%', maxHeight: '800px', objectFit: 'contain'}}
        />

        <Carousel.Caption>
          <h3>Your animal shelter helper!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/76240c_4574fd878abb4c368f5cbac7aef3342a~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,enc_auto/76240c_4574fd878abb4c368f5cbac7aef3342a~mv2.jpg"
          alt="Third slide"
          style={{maxWidth: '100%', maxHeight: '800px', objectFit: 'contain'}}
        />

        <Carousel.Caption>
          <h3>Please explore our wonderful options!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFaded;