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

        return filteredProducts.map(
            ({ img, title, star, reviews, prevPrice, newPrice }) => (
                <Card
                    key={Math.random()}
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
            <Container style={{textAlign:"center" ,display: "contents"}} >
                <Row >
                    <h1>Recomanded</h1>
                    <Container fluid><section className="card-container">{result}</section></Container>
                    
                </Row>
                <Row>
                    <h1>Top Selling</h1>
                    <Container fluid><section className="card-container">{result}</section></Container>
                </Row>
            </Container>
        </>
    )
}