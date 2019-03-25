import React, { Component } from "react";
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Header,
  Dropdown
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const OtherHeading = ({ text }) => {
  return (
    <Container text>
      <Header
        as="h5"
        content={text}
        inverted
        style={{
          fontSize: "1.0em",
          fontWeight: "normal",
          marginTop: "-1.8em"
        }}
      />
    </Container>
  );
};

const HomepageHeading = ({ mobile }) => {
  return (
    <Container text>
      <Header
        as="h1"
        content="Delta Sound"
        inverted
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? "-1.5em" : "0.2em"
        }}
      />
      <Header
        as="h2"
        content="Aizawl Mizoram."
        inverted
        style={{
          fontSize: mobile ? "1.2em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0em" : "0.5em"
        }}
      />
    </Container>
  );
};

class DesktopContainer extends Component {
  state = { activeItem: "Home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
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
    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Segment
            textAlign="center"
            style={{
              padding: "1em 0em",
              minHeight: activeItem === "Home" ? 250 : 0
            }}
            inverted
          >
            <Menu inverted pointing secondary size="large">
              <Container>
                {this.renderMenu(activeItem)}
                <Dropdown text="Shopping" pointing className="link item">
                  <Dropdown.Menu>
                    <Dropdown.Header>Categories</Dropdown.Header>
                    <Dropdown.Item>
                      <Dropdown text="Clothing">
                        <Dropdown.Menu>
                          <Dropdown.Header>Mens</Dropdown.Header>
                          <Dropdown.Item>Shirts</Dropdown.Item>
                          <Dropdown.Item>Pants</Dropdown.Item>
                          <Dropdown.Item>Jeans</Dropdown.Item>
                          <Dropdown.Item>Shoes</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Header>Womens</Dropdown.Header>
                          <Dropdown.Item>Dresses</Dropdown.Item>
                          <Dropdown.Item>Shoes</Dropdown.Item>
                          <Dropdown.Item>Bags</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item>Home Goods</Dropdown.Item>
                    <Dropdown.Item>Bedroom</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Order</Dropdown.Header>
                    <Dropdown.Item>Status</Dropdown.Item>
                    <Dropdown.Item>Cancellations</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Container>
            </Menu>
            {activeItem === "Home" ? <HomepageHeading /> : null}
          </Segment>
        </Responsive>
      </React.Fragment>
    );
  }
}
class MobileContainer extends Component {
  state = { activeItem: "Home" };

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) {
      this.setState({ sidebarOpened: false });
    }
  };
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    const { sidebarOpened } = this.state;

    if (sidebarOpened) {
      this.setState({ sidebarOpened: false });
    }
  };
  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
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
    const { sidebarOpened } = this.state;
    const { activeItem } = this.state;
    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={sidebarOpened}
            width="thin"
          >
            {this.renderMenu(activeItem)}
            <Dropdown text="Shopping" pointing className="link item">
              <Dropdown.Menu>
                <Dropdown.Header>Categories</Dropdown.Header>
                <Dropdown.Item>
                  <Dropdown text="Clothing">
                    <Dropdown.Menu>
                      <Dropdown.Header>Mens</Dropdown.Header>
                      <Dropdown.Item>Shirts</Dropdown.Item>
                      <Dropdown.Item>Pants</Dropdown.Item>
                      <Dropdown.Item>Jeans</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>Womens</Dropdown.Header>
                      <Dropdown.Item>Dresses</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Item>Bags</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>Home Goods</Dropdown.Item>
                <Dropdown.Item>Bedroom</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Order</Dropdown.Header>
                <Dropdown.Item>Status</Dropdown.Item>
                <Dropdown.Item>Cancellations</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: "100vh" }}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                </Menu>
              </Container>

              {activeItem === "Home" ? (
                <HomepageHeading mobile />
              ) : (
                <OtherHeading text={activeItem} />
              )}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}
//style={{
//padding: "1em 0em",
//minHeight: activeItem === "Home" ? 250 : 0
//}}
const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);
class TopBar extends Component {
  render() {
    console.log(this.props.name);
    return <ResponsiveContainer />;
  }
}

export default TopBar;
