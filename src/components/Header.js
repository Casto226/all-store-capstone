import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import "./Header.css"; // External CSS file for styling
import { useState, useEffect } from "react";

//The header component contains all the interactive components for the user to jump between pages.

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(user.isLoggedIn);
  const [username, setUsername] = useState(user.username);

  useEffect(() => {
    setIsLoggedIn(user.isLoggedIn);
    setUsername(user.username);
  }, [user]);

  //If the user has logged in, he/she will be able to logout from any page, which will make the registration and log in components to pop back out.
  const handleLogout = () => {
    dispatch(logout());
    console.log(user);
  };
  {
    /* The components will always be available through the main header. */
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Online Store
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto nav-links">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Store
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart
          </Nav.Link>
          <Nav.Link as={Link} to="/help">
            Help
          </Nav.Link>
          {isLoggedIn ? (
            <div className="logoutContainer">
              <p>Welcome {username}</p>
              <Button variant="primary" onClick={handleLogout}>
                logout
              </Button>
            </div>
          ) : (
            <div className="access">
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </div>
          )}
          {/*Once the user registers or logs in, the two components in the header will become unavailable.*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
