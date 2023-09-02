import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import products from "../db/data";
import Card from "./Card";

export default function Mainpage() {

    function topsell(products) {
        let filteredProducts = products;

        // Applying selected filter for top selling and recomanded
        filteredProducts = filteredProducts.filter(
            ({ category, company, title }) =>
                category === "Apple" ||
                company === "Apple" ||
                title === "Apple"
        );

        let arr = filteredProducts
        filteredProducts =  []
        for (let i = 0; i < 4; i++) {
            filteredProducts[i] = arr[i];
        }
        return filteredProducts.map(
            ({ img, title, _id, star, reviews, prevPrice, newPrice }) => (
                <Card
                    key={Math.random()}
                    id={_id}
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    prevPrice={prevPrice}
                    newPrice={newPrice}
                />
            )
        );
    }
    const result = topsell(products);
    return (
        <>
            <Container style={{ textAlign: "center", display: "contents" }} >
                <Row>
                    <Col>
                    <img src={require('../pic/backgraund.png')} className="d-block w-100" alt="phone" />
                    </Col>
                    <Col>
                        <img src={require('../pic/backgraund.png')} className="d-block w-100" alt="phone" />
                    </Col>
                    <Col>
                    <img src={require('../pic/backgraund.png')} className="d-block w-100" alt="phone" />
                    </Col>
                </Row>
                <Row style={{height: "50rem"}}>
                    <h1>Recomanded</h1>
                    <Container fluid><section className="card-container">{result}</section></Container>
                </Row>"
                <Row style={{height: "50rem"}}>
                    <h1>Top Selling</h1>
                    <Container fluid><section className="card-container">{result}</section></Container>
                </Row>
                <Row style={{height: "50rem"}}>
                    <h1>new phone</h1>
                    <Container fluid><section className="card-container">{result}</section></Container>
                </Row>
            </Container>
        </>
    )
}