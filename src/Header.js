import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto nav_bar_wrapper">
          <Link to="/Home">Home</Link>
          <Link to="/Update">Update Bots</Link>
          <Link to="/Review">Review</Link>
          <Link to="/Validate">Validate</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
        </Nav>
      </Navbar>
    </div>
  )
}
export default Header