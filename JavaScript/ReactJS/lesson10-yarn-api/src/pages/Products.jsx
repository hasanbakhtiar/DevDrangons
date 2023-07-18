import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard';
import { Col, ListGroup, Row } from 'react-bootstrap'

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProduct(res.data.products));
  }, [])
  return (
    <>
      <h1 className='text-center my-5 text-light'>Product List</h1>
      <Row>
      <Col sm={12} md={3}>
      <ListGroup>
      <ListGroup.Item>Smartphones</ListGroup.Item>
      <ListGroup.Item>Laptops</ListGroup.Item>
      <ListGroup.Item>Fragrances</ListGroup.Item>
      <ListGroup.Item>Skincare</ListGroup.Item>
      <ListGroup.Item>Groceries</ListGroup.Item>
    </ListGroup>
      </Col>
      <Col sm={12} md={9}>

       <Row className='g-5'>
       {product.length === 0 ? <h1>Loading...</h1> : product.map(item=>(
          <SingleCard 
          key={item.id}
          photo={item.images[0]}
          title={item.title}
          price={item.price}
          />
        ))}
       </Row>
        
      </Col>
    </Row>
    </>
  )
}

export default Products