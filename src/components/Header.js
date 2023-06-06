import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Header() {
  return (
    <>
    <Navbar variant="dark">
        <Container>
    <Navbar.Brand href="/">
      <img
        alt=""
        src="https://static.vecteezy.com/system/resources/previews/010/411/845/original/restaurant-logo-design-template-free-vector.jpg"
        width="50"
        height="40"
        className="d-inline-block align-top"
      />{' '}
          River View Cafe
    </Navbar.Brand>
    </Container>
  </Navbar>
    </>
  )
}

export default Header