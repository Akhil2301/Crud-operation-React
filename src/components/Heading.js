import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

function Heading() {
  return (

      <Navbar color="dark">
        <Container className="d-flex justify-content-between" >
          <NavbarBrand className="text-white " href="/">ToDo</NavbarBrand>
          <Nav > 
            <NavItem >
              <Link to="/add" className="btn btn-primary">
                Add Todos
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Heading;
