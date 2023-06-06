import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function RestuarantCard({restuarant}) {

  return (
    <Link style={{textDecoration:"none",color:"white"}} to = {`view-restuarant/ ${restuarant.id}`}>
<Card className='mb-3'>
  <Card.Img variant="top" className='p-3' src= {restuarant.photograph} />
  <Card.Body>
    <Card.Title>{restuarant.name}</Card.Title>
    <Card.Text>
      {restuarant.neighborhood}
    </Card.Text>
  </Card.Body>
</Card>
    </Link>
  )
}

export default RestuarantCard