import Carousel from 'react-bootstrap/Carousel';

function Picture(props) {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        {/* <img src={props.Picture} className="d-block w-100" alt="..." /> */}
        <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver" className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
        {/* <img src={props.Picture} className="d-block w-100" alt="..." /> */}
        <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver" className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
        {/* <img src={props.Picture} className="d-block w-100" alt="..." /> */}
        <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver" className="d-block w-100" alt="..." />
      </Carousel.Item>
    </Carousel>
  );
}

export default Picture;