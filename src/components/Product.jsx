import Card from 'react-bootstrap/Card';
import Picture from './Picture'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function Product() {
    return (
        <Container fluid>
            <Row style={{ marginTop: 10 + 'rem' }}>
                <Col>
                    <Container fluid style={{ width: '30rem' }}>
                        <Picture />
                    </Container>
                </Col>
                <Col>
                    <Container fluid>
                        <Card.Text>
                            <Col>
                                <div className="small mb-1">ID: BST-498</div>
                                <h1 className="display-5 fw-bolder">Shop item template</h1>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem
                                    quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis
                                    delectus ipsam minima ea iste laborum vero?</p>
                                <ListGroup>
                                    <ListGroup.Item>Model Name :</ListGroup.Item>
                                    <ListGroup.Item>Description :</ListGroup.Item>
                                    <ListGroup.Item>Color :</ListGroup.Item>
                                    <ListGroup.Item>Inventory :</ListGroup.Item>
                                    <ListGroup.Item>Discount :</ListGroup.Item>
                                    <ListGroup.Item>price :</ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="fs-5 mb-5">
                                            <span className="text-decoration-line-through">$45.00</span>
                                            <span>$40.00</span>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex fs-5 mb-5">
                                            <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" />
                                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                                <i className="bi-cart-fill me-1"></i>
                                                Add to cart
                                            </button>
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

export default Product;