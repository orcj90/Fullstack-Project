import Carousel from 'react-bootstrap/Carousel';

function Picture(props) {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img src={props.Picture} className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.Picture} className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.Picture} className="d-block w-100" alt="..." />
      </Carousel.Item>
    </Carousel>
  );
}

export default Picture;