import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MenuOption from '../../interfaces/MenuOption';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  MenuOptions:MenuOption[],
}

const Header = (props: HeaderProps ) => (
  <div className={styles.Header}>

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Hulk Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              { props.MenuOptions.map((menu:MenuOption, index) => {
                  return (
                         <NavLink key={index} to={menu.url} end>&nbsp; &nbsp;  {menu.name}</NavLink>
                  );})
              } 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default Header;
