import { Container, Form, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate(); 
  const [query, setQuery]=useState('');
  const handleOnChange=(e)=>{
    
    setQuery(e.target.value);

  }
  const handleOnSubmit=(e)=>{
e.preventDefault();
navigate(`/search?query=${query}`)
  }

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              {user ? (
                <Nav.Link as={Link} to="/mypost">
                  My Post
                </Nav.Link>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>

          <Form className="d-flex g-2" onSubmit={handleOnSubmit}>
            <Form.Control
              type="search"
              onChange={handleOnChange}
              placeholder="Search"
              className="me-2"
              value={query}
              aria-label="Search"
            />
            <Button type="submit" className="me-2" variant="outline-success">
              Search
            </Button>
            {user ? (
              <Button variant="warning" onClick={logout}>
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="success">Login</Button>
              </Link>
            )}
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
