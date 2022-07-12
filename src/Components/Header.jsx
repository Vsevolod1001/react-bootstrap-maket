import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import logo from "./logo192.png";
import { Outlet, Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              height="30"
              weidth="30"
              alt="Logo"
              className="d-inline-block align-top"
            />
            React site
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About as
              </Nav.Link>
              <Nav.Link as={Link} to="/contacts">
                Contacts
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
};
