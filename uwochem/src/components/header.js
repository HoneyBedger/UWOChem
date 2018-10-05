import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavbarBrand, NavbarToggler,
  Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu,
  DropdownItem, Input, InputGroup,
  InputGroupAddon, Button, Label, FormGroup, Form,
  Row, Col} from 'reactstrap';
import {Link, NavLink} from 'react-router-dom';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navbarIsOpen: false
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.logout = this.logout.bind(this);
  }

  toggleNavbar() {
    this.setState({
      navbarIsOpen: !this.state.navbarIsOpen
    });
  }

  logout() {
    fetch('/users/logout');
    window.localStorage.clear();
    this.setState({loggedIn: false});
    this.props.logoutMain();
  }

  render() {
    let LoginLogoutButton;
    if (!this.props.loggedIn) LoginLogoutButton = <Button onClick={this.props.toggleLoginModal}>Login/Sing up</Button>
    else {
      let picture = window.localStorage.userPicture && <img src={window.localStorage.userPicture} />;
      LoginLogoutButton = (
        <React.Fragment>
          <NavLink to="/profile">{picture} {window.localStorage.userName || window.localStorage.userUsername}</NavLink>{' | '}
          <Button onClick={this.logout}>Log out</Button>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Navbar expand="md" fixed="top">
          <NavbarToggler onClick={this.toggleNavbar}><span className="fa fa-angle-double-down fa-lg"></span></NavbarToggler>

            <Nav className="mr-auto" navbar>
              <Collapse isOpen={this.state.navbarIsOpen} navbar>
              <NavbarBrand href="/home">CHEM 1301 &amp; 1302</NavbarBrand>
              <NavItem>
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Practice</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink to="/practice/1301">Chem 1301</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/practice/1302">Chem 1302</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Tutorials</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink to="/tutorials/1301">Chem 1301</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/tutorials/1302">Chem 1302</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <button className="nav-link" style={{backgroundColor: "inherit", border: "none"}}
                  onClick={() => {
                    let about = document.getElementById("about");
                    about.scrollIntoView({behavior: "smooth"})
                  }}>About</button>
              </NavItem>
              </Collapse>
                <NavItem>
                  <Form>
                    <FormGroup>
                      <InputGroup>
                        <Input className="search input-oneline" type="text" placeholder="Search" />
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
                {LoginLogoutButton}
              </FormGroup>
            </NavItem>
          </Nav>
        </Navbar>
    </React.Fragment>
    );
  }
}

export default Header;
