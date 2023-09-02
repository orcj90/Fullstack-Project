import Card from 'react-bootstrap/Card';
import Picture from './Picture'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Order } from '../context/Order'
import {
    getLSContent,
    setLSContent,
    calculateTotal,
    getCartItemPrices,
    displayCartTotal,
    saveProduct,
    removeProduct
} from "../basket"

function Product() {

    const params = useParams()
    const id = params.id
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const [qty, setqty] = useState("1")
    // const { login, error, setError } = useContext(Order);
    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch(`http://localhost:3000/api/products/${id}`)
            const data = await res.json()
            setProduct(data)
        }
        fetchData()
    }, [])

    let basket = []
    basket = [JSON.parse(localStorage.getItem('basket'))]


    const handleClick = () => {

        console.log('btn clicked ', id,)

        saveProduct(id, product?.title, product?.img, product?.newPrice, qty)
    }
    return (
        <Container fluid>
            <Row style={{ marginTop: 10 + 'rem' }}>
                <Col>
                    <Container fluid style={{ width: '30rem' }}>
                        {/* <Picture picture={img} /> */}
                        <Picture />
                    </Container>
                </Col>
                <Col>
                    <Container fluid>
                        <Card.Text>
                            <Col>
                                <div className="small mb-1">ID: {id}</div>
                                <h1 className="display-5 fw-bolder">Shop item template : {product?.title}</h1>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem
                                    quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis
                                    delectus ipsam minima ea iste laborum vero?</p>
                                <ListGroup>
                                    <ListGroup.Item>Model Name :{product?.title}</ListGroup.Item>
                                    <ListGroup.Item>Description :</ListGroup.Item>
                                    <ListGroup.Item>compeny :{product?.company}</ListGroup.Item>
                                    <ListGroup.Item>Color : {product?.color}</ListGroup.Item>
                                    <ListGroup.Item>Inventory :</ListGroup.Item>
                                    <ListGroup.Item>Discount : {((product?.prevPrice) - (product?.newPrice)) / (product?.prevPrice) * 100}%</ListGroup.Item>
                                    <ListGroup.Item>price : ${product?.prevPrice}</ListGroup.Item>
                                    <ListGroup.Item>reviews :{product?.reviews}</ListGroup.Item>
                                    <ListGroup.Item>star :{product?.star}</ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="fs-5 mb-5">
                                            <span className="text-decoration-line-through">${product?.prevPrice}</span>
                                            <span>${product?.newPrice}</span>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex fs-5 mb-5">
                                            <input className="form-control text-center me-3" id="inputQuantity" type="num" value={qty} onChange={(e) => setqty(e.target.value)} />
                                            {/* <button className="btn btn-outline-dark flex-shrink-0" id={"button" + id} onClick={handleofevent} type="button">
                                                <i className="bi-cart-fill me-1"></i>
                                                Add to cart
                                            </button> */}
                                            <button onClick={handleClick} className="btn" id={{ id }}><i className="fa-solid fa-cart-shopping add-to-cart"></i></button>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Card.Text>
                    </Container>
                </Col>
            </Row>
        </Container>

    );
}
// }
export default Product;