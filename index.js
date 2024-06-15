import React from "react";
import { render } from "react-dom";
import { Menu, Breadcrumb, Header, Sticky } from "semantic-ui-react";

class App extends React.Component {
  state = {
    navbarColor: "black"
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    if (window.scrollY > 200) {
      this.setState({ navbarColor: "green" });
    } else {
      this.setState({ navbarColor: "black" });
    }
  };

  render() {
    const { navbarColor } = this.state;
    return (
      <div>
        <Sticky>
          <Menu inverted style={{ margin: 0 }}>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Users</Menu.Item>
            <Menu.Item position="right">Logout</Menu.Item>
          </Menu>

          <div style={{ backgroundColor: navbarColor }}>
            <Breadcrumb>
              <Breadcrumb.Section link>Users</Breadcrumb.Section>
              <Breadcrumb.Divider icon="right chevron" />
              <Breadcrumb.Section>John Doe</Breadcrumb.Section>
            </Breadcrumb>
          </div>
        </Sticky>

        <div style={{ padding: "1em" }}>
          <Header>Welcome John Doe</Header>

          <p>
            It is a curious thing, Harry, but perhaps those who are best suited
            to power are those who have never sought it. Those who, like you,
            have leadership thrust upon them, and take up the mantle because
            they must, and find to their own surprise that they wear it well.
            <br />
            <br />
            Happiness can be found in the darkest of time, if one only remembers
            to turn on the light.
            <br /> <br />
            It is a curious thing, Harry, but perhaps those who are best suited
            to power are those who have never sought it. Those who, like you,
            have leadership thrust upon them, and take up the mantle because
            they must, and find to their own surprise that they wear it well.
            <br />
            <br />
            Happiness can be found in the darkest of time, if one only remembers
            to turn on the light.
            <br /> <br />
            It is a curious thing, Harry, but perhaps those who are best suited
            to power are those who have never sought it. Those who, like you,
            have leadership thrust upon them, and take up the mantle because
            they must, and find to their own surprise that they wear it well.
            <br />
            <br />
            Happiness can be found in the darkest of time, if one only remembers
            to turn on the light.
            <br /> <br />
            It is a curious thing, Harry, but perhaps those who are best suited
            to power are those who have never sought it. Those who, like you,
            have leadership thrust upon them, and take up the mantle because
            they must, and find to their own surprise that they wear it well.
            <br />
            <br />
            Happiness can be found in the darkest of time, if one only remembers
            to turn on the light.
            <br /> <br />
            It is a curious thing, Harry, but perhaps those who are best suited
            to power are those who have never sought it. Those who, like you,
            have leadership thrust upon them, and take up the mantle because
            they must, and find to their own surprise that they wear it well.
            <br />
            <br />
            Happiness can be found in the darkest of time, if one only remembers
            to turn on the light.
            <br /> <br />
            It is a curious thing, Harry, but perhaps those who are best suited
            to power are those who have never sought it. Those who, like you,
            have leadership thrust upon them, and take up the mantle because
            they must, and find to their own surprise that they wear it well.
            <br />
            <br />
            Happiness can be found in the darkest of time, if one only remembers
            to turn on the light.
            <br /> <br />
            Happiness can be found in the darkest of time, if one only remembers
            to turn on the light.
            <br /> <br />
            It is a curious thing, Harry, but perhaps those who are best suited
            to power are those who have never sought it. Those who, like you,
            have leadership thrust upon them, and take up the mantle because
            they must, and find to their own surprise that they wear it well.
            <br />
            <br />
            Happiness can be found in the darkest of time, if one only remembers
            to turn on the light.
            <br /> <br />
            It is a curious thing, Harry, but perhaps those who are best suited
            to power are those who have never sought it. Those who, like you,
            have leadership thrust upon them, and take up the mantle because
            they must, and find to their own surprise that they wear it well.
            <br />
            <br />
            Happiness can be found in the darkest of time, if one only remembers
            to turn on the light.
          </p>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
