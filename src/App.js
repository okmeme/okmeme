import React, { Component } from 'react';
import {
	Collapse,
	Container,
	Row,
	Column,
	Card,
	Button,
	CardBody,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
	NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
	DropdownItem } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faAngleUp);

class App extends Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
		};
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
	render() {
		return (
			<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">OKMEME</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="" navbar>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Videos
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									Memes
								</DropdownItem>
								<DropdownItem>
									Gaming
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									All
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Music
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									Memes
								</DropdownItem>
								<DropdownItem>
									Chill
								</DropdownItem>
								<DropdownItem>
									Dance
								</DropdownItem>
								<DropdownItem>
									Compositions
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									All
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Gaming
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									Memes
								</DropdownItem>
								<DropdownItem>
									New Releases
								</DropdownItem>
								<DropdownItem>
									Old Releases
								</DropdownItem>
								<DropdownItem>
									Trailers
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									Minecraft
								</DropdownItem>
								<DropdownItem>
									Overwatch
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									All
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
						<NavItem>
							<NavLink href="/login" className="float-right">Login</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>

			<Container>
				<Row>
					<Card>
						<CardBody>
							<Button color="success">
								<FontAwesomeIcon icon="faAngleUp" />
								12
							</Button>
							<a className="link" href="https://google.com" target="_blank" rel="noopener noreferrer">
								Cool link
								<FontAwesomeIcon className="link-out" icon="faSignOutAlt" />
							</a>
						</CardBody>
					</Card>
				</Row>
				<Row>
					<Card>
						<CardBody>
							<Button color="success">
								<FontAwesomeIcon icon="faAngleUp" />
								42
							</Button>
							<a className="link" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
								Cool link #2 supporting embeds
								<FontAwesomeIcon className="link-out" icon="faSignOutAlt" />
								<FontAwesomeIcon className="link-out" icon="faExpand" />
							</a>
						</CardBody>
					</Card>
				</Row>
			</Container>

		</div>
    );
  }
}

export default App;
