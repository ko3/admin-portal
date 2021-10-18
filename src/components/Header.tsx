import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Header = () => {
    return (
    <Navbar collapseOnSelect fixed='top' expand='sm' bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>Admin-Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <NavLink exact  to='/'>Home</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink  to='/apiproducts'>ApiProducts</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink  to='/c/:userid'>ScreenC</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink  to='/context'>ContextTester</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink  to='/about'>About</NavLink>
                    </Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
  }
  
export default Header;