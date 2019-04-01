import React, { Component } from "react";
import {
  Container,
  Menu,
  Dropdown,
  Grid,
  Button,
  Icon,
  Image
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import OtherCarousel from "./OtherCarousel";

class TopBars extends Component {
  componentDidMount() {
    const path = window.location.pathname.replace("/", "");

    this.setState({ activeItem: path === "" ? "Home" : path });
  }
  state = {
    activeItem: null,
    dropdownMenuStyle: {
      display: "none"
    }
  };
  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name, dropdownMenuStyle: { display: "none" } });
  };

  renderMenu = activeItem => {
    const menus = ["Home", "Albums", "Products", "About", "Contact"];
    const renderedMenu = menus.map(menu => {
      return (
        <Menu.Item
          as={Link}
          to={menu === "Home" ? "/" : `/${menu}`}
          name={menu}
          key={menu}
          active={activeItem === menu}
          onClick={this.handleItemClick}
        />
      );
    });
    return renderedMenu;
  };
  render() {
    const { children } = this.props;
    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <Grid padded className="tablet computer only">
          <Container>
            <Menu borderless inverted size="large">
              <Menu.Item header>
                <Image size="mini" src="logo.png" />
              </Menu.Item>
              {this.renderMenu(activeItem)}

              <Dropdown text="Dropdown" className="item">
                <Dropdown.Menu>
                  <Dropdown.Item as="a">Action</Dropdown.Item>
                  <Dropdown.Item as="a">Another action</Dropdown.Item>
                  <Dropdown.Item as="a">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Navbar header</Dropdown.Header>
                  <Dropdown.Item as="a">Seperated link</Dropdown.Item>
                  <Dropdown.Item as="a">One more seperated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Container>
        </Grid>
        <Grid className="mobile only">
          <Menu inverted borderless size="large" fixed="top">
            <Menu.Item />
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  icon
                  basic
                  inverted
                  toggle
                  onClick={this.handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              vertical
              borderless
              inverted
              fluid
              style={this.state.dropdownMenuStyle}
            >
              {this.renderMenu(activeItem)}
              <Dropdown text="Dropdown" className="item">
                <Dropdown.Menu>
                  <Dropdown.Item as="a">Action</Dropdown.Item>
                  <Dropdown.Item as="a">Another action</Dropdown.Item>
                  <Dropdown.Item as="a">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Navbar header</Dropdown.Header>
                  <Dropdown.Item as="a">Seperated link</Dropdown.Item>
                  <Dropdown.Item as="a">One more seperated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Menu>
        </Grid>
        {activeItem === "Home" ? <Carousel /> : <OtherCarousel />}
        {children}
      </React.Fragment>
    );
  }
}
export default TopBars;
