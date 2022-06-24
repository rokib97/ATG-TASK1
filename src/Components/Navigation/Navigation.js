import { Navbar } from "react-bootstrap";

import {
  Container,
  Form,
  FormControl,
  Image,
  Nav,
  NavDropdown,
} from "react-bootstrap";

import { FaSearch } from "react-icons/fa";
import Logo from "../../Assests/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#">
            <Image src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-center" id="navbarScroll">
            <Form className="search justify-content-center">
              <button>
                <FaSearch />
              </button>
              <FormControl
                type="search"
                placeholder="Search"
                className="my-2"
                aria-label="Search"
              />
            </Form>
            <Nav
              className="justify-content-end flex-grow-1 pe-3 mt-2"
              navbarScroll
            >
              <NavDropdown
                title="Create account. It's free!"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item>Create new account</NavDropdown.Item>
                <NavDropdown.Item>or Login?</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
