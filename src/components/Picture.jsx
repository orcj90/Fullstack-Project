import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Picture() {
    return (
        <>
            <div id="piccard1" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#piccard1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#piccard1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#piccard1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#piccard1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#piccard1" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}