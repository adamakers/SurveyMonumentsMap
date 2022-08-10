import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';


const Header = () => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar className='p-4' color='primary' sticky='top' expand='md' dark>
      <NavbarBrand href='/'>
        Working Title
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className='me-2' />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href='#'>
              Go Map!
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
