import React from "react";
import { Navbar, Container, NavLink, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <NavLink as={Link} to="/">
              Redux
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Menubar;
