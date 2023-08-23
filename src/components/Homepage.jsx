import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Findproducts from "./Main/Findproducts";
// import products from "../db/data";
import Recommended from "./Main/Recommended";
import Sidebar from "./Main/Sidebar/Sidebar";
import Card from "./Card";
import "./index.css";

function App() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()

        return;
    }, [])

    const getProducts = async () => {
        let products = null

        try {
            const res = await fetch('http://localhost:3000/api/productsdata')
            products = await res.json()

        } catch (error) {
            console.log(error)
        }

        // console.log(products)

        setProducts(products)
    }

    const [selectedCategory, setSelectedCategory] = useState(null);

    // ----------- Input Filter -----------
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredItems = products.filter(
        (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    // ----------- Radio Filtering -----------
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // ------------ Button Filtering -----------
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    function filteredData(products, selected, query) {
        let filteredProducts = products;

        // Filtering Input Items
        if (query) {
            filteredProducts = filteredItems;
        }

        // Applying selected filter
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) =>
                    category === selected ||
                    color === selected ||
                    company === selected ||
                    newPrice === selected ||
                    title === selected
            );
        }
        console.log(filteredProducts)
        console.log(products)
        return filteredProducts.map(
            (filteredProduct) => (
                <Card
                    // key={Math.random()}
                    id={filteredProduct.id}
                    img={filteredProduct.img}
                    title={filteredProduct.title}
                    star={filteredProduct.star}
                    reviews={filteredProduct.reviews}
                    prevPrice={filteredProduct.prevPrice}
                    newPrice={filteredProduct.newPrice}
                />
            )
        );
    }

    const result = filteredData(products, selectedCategory, query);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs="auto">
                        <Sidebar handleChange={handleChange} query={query} handleInputChange={handleInputChange} />
                    </Col>
                    <Col xs="auto">

                        <Recommended handleClick={handleClick} />

                        <Findproducts result={result} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
