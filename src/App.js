import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Albums from "./components/Albums";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Header,
  Dropdown,
  Visibility
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
  componentDidMount() {
    const path = window.location.pathname.replace("/", "");

    this.setState({ activeItem: path === "" ? "Home" : path });
  }
  state = { activeItem: null };
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
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
    const { children } = this.props;
    const { activeItem } = this.state;
    const { fixed } = this.state;
    return (
      <React.Fragment>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              textAlign="center"
              style={{
                padding: "1em 0em",
                minHeight: activeItem === "Home" ? 250 : 0
              }}
              inverted
            >
              <Menu
                fixed={fixed ? "top" : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size="large"
              >
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
            {children}
          </Visibility>
        </Responsive>
      </React.Fragment>
    );
  }
}

class MobileContainer extends Component {
  state = { activeItem: null };
  componentDidMount() {
    const path = window.location.pathname.replace("/", "");

    this.setState({ activeItem: path === "" ? "Home" : path });
  }

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
    const { children } = this.props;
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
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ResponsiveContainer>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Albums" exact component={Albums} />
                <Route path="/About" exact component={About} />
                <Route path="/Contact" exact component={Contact} />
              </Switch>
              <Footer />
            </ResponsiveContainer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
