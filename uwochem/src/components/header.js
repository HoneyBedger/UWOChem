import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavbarBrand, NavbarToggler,
  Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu,
  DropdownItem, Input, InputGroup,
  InputGroupAddon, Button, Label, FormGroup, Form,
  Row, Col} from 'reactstrap';
import {Link, NavLink, withRouter} from 'react-router-dom';


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
    let user = window.localStorage.getItem("userToken") &&
      JSON.parse(window.localStorage.getItem("user"));
    let LoginLogoutButton;
    if (!this.props.loggedIn)
      LoginLogoutButton = <Button color="primary" onClick={this.props.toggleLoginModal}>Login/Sing up</Button>
    else {
      let picture = user && user.pictureUrl && <img src={user.pictureUrl} style={{maxHeight: "45px"}}/>;
      let name = user && (user.name || user.username);
      LoginLogoutButton = (
        <React.Fragment>
          <NavLink to="/profile">{name} {picture}</NavLink>{' | '}
          <Button color="primary" onClick={this.props.logout}>Log out</Button>
        </React.Fragment>
      );
    }

    let path = this.props.location.pathname;

    return (
      <React.Fragment>
        <Navbar expand="md" fixed="top">
          <NavbarToggler onClick={this.toggleNavbar}><span className="fa fa-angle-double-down fa-lg"></span></NavbarToggler>
            <Nav className="mr-auto" navbar>
              <Collapse isOpen={this.state.navbarIsOpen} navbar>
              <NavbarBrand href="/home">CHEM 1301 &amp; 1302</NavbarBrand>
              <NavItem>
                <NavLink className={"nav-link" + (path.includes("home") ? " active" : "")}
                  to="/home">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className={path.includes("practice") ? "active" : ""}
                  nav caret>Practice</DropdownToggle>
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
                <DropdownToggle className={path.includes("tutorials") ? "active" : ""}
                  nav caret>Tutorials</DropdownToggle>
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
                {path.includes("home") ?
                  (<Button color="link" className="nav-link"
                    onClick={() => {
                      let about = document.getElementById("about");
                      about.scrollIntoView({behavior: "smooth"});}}>About</Button>) :
                  <NavLink to="/about"
                    className={"nav-link" + (path.includes("about") ? " active" : "")}>About</NavLink>
                }
              </NavItem>
              </Collapse>
                <NavItem>
                  <Form>
                    <FormGroup>
                      <InputGroup>
                        <Input className="search input-oneline" type="text" placeholder="Search" />
                        <InputGroupAddon addonType="append">
                          <Button color="primary"><span className="fa fa-search"></span></Button>
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

export default withRouter(Header);
