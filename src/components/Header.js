import React from 'react'
import {Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
<header>
    <Navbar expand="lg" bg="dark" variant="dark" >
          <Container>
            <Navbar.Brand href="/">MyShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/cart"><i class="fa-solid fa-cart-plus"></i>Cart</Nav.Link>
                <Nav.Link href="/login"> <i class="fa-solid fa-user"></i>Sign In</Nav.Link>                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
</header>  )

}

export default Header