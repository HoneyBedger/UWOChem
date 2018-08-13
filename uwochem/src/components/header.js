import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavbarBrand, NavbarToggler,
  Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu,
  DropdownItem, Form, FormGroup, Input, InputGroup,
  InputGroupAddon, Button} from 'reactstrap';
import {Link, NavLink} from 'react-router-dom';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navbarIsOpen: false
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      navbarIsOpen: !this.state.navbarIsOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar expand="md">
          <NavbarToggler onClick={this.toggleNavbar}><span className="fa fa-angle-double-down fa-lg"></span></NavbarToggler>

            <Nav className="mr-auto" navbar>
              <Collapse isOpen={this.state.navbarIsOpen} navbar>
              <NavbarBrand href="/home">CHEM 1301 &amp; 1302</NavbarBrand>
              <NavItem>
                <NavLink className="nav-link active" to="/home">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Practice
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link to="/practice/1301">Chem 1301</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/practice/1302">Chem 1302</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Tutorials
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link to="/tutorials/1301">Chem 1301</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/tutorials/1302">Chem 1302</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink className="nav-link" to="/aboutme">About</NavLink>
              </NavItem>
              </Collapse>
                <NavItem>
                  <Form>
                    <FormGroup>
                      <InputGroup>
                        <Input type="text" placeholder="Search" />
                        <InputGroupAddon addonType="append">
                          <Button><span className="fa fa-search"></span></Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </NavItem>
            </Nav>
          <Nav className="ml-auto">
            <NavItem>
              <FormGroup>
                <Button>Login</Button>
              </FormGroup>
            </NavItem>
          </Nav>
        </Navbar>
    </React.Fragment>
    );
  }
}

export default Header;
