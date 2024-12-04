import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import { addToCart } from "../rtk/slices/cart-slice";
function Products() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [])
  return <div className="products-container">
    {products.map((product, index) => {
      if (index !== 4) {
        return <Col key={product.id}>
          <Card style={{ width: '18rem' }} >
            <Card.Img style={{ height: "350px" }} variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{(product.title).slice(0, 10)}</Card.Title>
              <Card.Text>
                {(product.description).slice(0, 50)}
              </Card.Text>
              <Button variant="primary" onClick={() => {
                dispatch(addToCart(product))
              }}>Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      }
    })}
  </div>
}
export default Products;