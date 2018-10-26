import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavbarBrand, NavbarToggler, Collapse,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input,
  InputGroup, InputGroupAddon, Button, FormGroup, Form} from 'reactstrap';
import {NavLink, withRouter} from 'react-router-dom';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navbarIsOpen: false,
      widthAbove600: window.matchMedia( "(min-width: 600px)" ).matches
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.search = this.search.bind(this);
  }

  toggleNavbar() {
    this.setState({
      navbarIsOpen: !this.state.navbarIsOpen
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    let resizeTimeout;
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        this.setState({widthAbove600: window.matchMedia( "(min-width: 600px)" ).matches});
      }.bind(this), 66)
    }
  }

  search() {
    let searchString = this.searchString && this.searchString.value.trim();
    if (!searchString || searchString.length === 0) return;
    else this.props.history.push(`/practice/search/${searchString}`);
  }

  render() {
    let user = window.localStorage.getItem("userToken") &&
      JSON.parse(window.localStorage.getItem("user"));
    let LoginLogoutButton;
    if (!this.props.loggedIn)
      LoginLogoutButton = <Button color="primary" onClick={this.props.toggleLoginModal}>Login/Sign up</Button>
    else {
      let name = user && (user.name || user.username);
      let picture = user && user.pictureUrl && <img src={user.pictureUrl} alt={name} style={{maxHeight: "45px"}}/>;
      LoginLogoutButton = (
        <React.Fragment>
          <NavLink to="/profile">{name} {picture}</NavLink>{' | '}
          <Button color="primary" onClick={this.props.logout}>Log out</Button>
        </React.Fragment>
      );
    }

    const Search = (
      <NavItem>
        <Form>
          <FormGroup>
            <InputGroup>
              <Input className="search input-oneline" type="text" placeholder="Search"
                innerRef={input => {this.searchString = input}}/>
              <InputGroupAddon addonType="append">
                <Button color="primary" onClick={this.search}><span className="fa fa-search"></span></Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Form>
      </NavItem>
    );

    let path = this.props.location.pathname;

    return (
      <React.Fragment>
        <Navbar expand="lg" fixed="top" className={this.state.navbarIsOpen ? "open" : "closed"}>
          <NavbarToggler onClick={this.toggleNavbar}>
            {this.state.navbarIsOpen ? <span className="fa fa-angle-double-up fa-lg"/>
              : <span className="fa fa-angle-double-down fa-lg"/>}</NavbarToggler>
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
              <NavItem>
                <NavLink to="/tutorials"
                  className={"nav-link" + (path.includes("tutorials") ? " active" : "")}>Tutorials</NavLink>
              </NavItem>
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
              {!this.state.widthAbove600 && Search}
            </Collapse>
            {this.state.widthAbove600 && Search}
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
