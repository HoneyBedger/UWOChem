import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavbarBrand, NavbarToggler,
  Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu,
  DropdownItem, Input, InputGroup,
  InputGroupAddon, Button, Label, FormGroup, Form,
  Row, Col, Modal, ModalHeader, ModalBody,
  ModalFooter} from 'reactstrap';
import {Link, NavLink} from 'react-router-dom';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navbarIsOpen: false,
      modalIsOpen: false
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNavbar() {
    this.setState({
      navbarIsOpen: !this.state.navbarIsOpen
    });
  }

  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
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
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <NavLink to="/practice">
                  <DropdownToggle tag="button" nav caret>
                    Practice
                  </DropdownToggle>
                </NavLink>
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
                <NavLink to="/tutorials">
                  <DropdownToggle nav caret>
                    Tutorials
                  </DropdownToggle>
                </NavLink>
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
                <Button onClick={this.toggleModal}>Login/Sing up</Button>
              </FormGroup>
            </NavItem>
          </Nav>
          <Modal isOpen={this.state.modalIsOpen} toggle={this.toggleModal} backdrop={true}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody className="mt-5 mb-5 pl-5 pr-5">
              <Form>
                <FormGroup row>
                  <Label for="email" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input className="input-oneline" type="email" name="email" placeholder="Email" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={2}>Password</Label>
                  <Col sm={10}>
                    <Input className="input-oneline" type="password" name="password" placeholder="Password" />
                  </Col>
                </FormGroup>
              </Form>
              <Row className="mt-5">
                <Col xs={{size: 10, offset: 2}} className="mb-3">
                  <p>Or sign in with</p>
                </Col>
                <Col xs={{size: 2, offset: 2}} >
                  <Button className="btn-social-icon btn-facebook btn-lg">
                    <span class="fa fa-facebook"></span>
                  </Button>
                </Col>
                <Col xs={2}>
                  <Button className="btn-social-icon btn-twitter btn-lg">
                    <span class="fa fa-twitter"></span>
                  </Button>
                </Col>
                <Col xs={2}>
                  <Button className="btn-social-icon btn-google btn-lg">
                    <span class="fa fa-google"></span>
                  </Button>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter className="pl-5 pr-5">
              <div className="row">
                <div className="col-12">
                  <Button color="primary" onClick={this.toggleModal}>Sign in</Button>{' '}
                  <Button outline color="secondary" onClick={this.toggleModal}>Cancel</Button>
                </div>
                <div className="col-12 mt-3">
                  <p>Do not have an account? <Link to="#">Sign up</Link></p>
                </div>
              </div>
            </ModalFooter>
          </Modal>
        </Navbar>
    </React.Fragment>
    );
  }
}

export default Header;
