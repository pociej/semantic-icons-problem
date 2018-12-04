import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { Icon, Button, Image } from "semantic-ui-react";
import "./main.html";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Icon name="home" size="mini" />
        <Icon name="blind" size="tiny" />
        <Icon name="sitemap" size="huge" />
        <Icon name="hourglass" size="big" />
        <Button color="teal"> Im rendereed</Button>
        <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
      </div>
    );
  }
}
Meteor.startup(() => {
  render(<App />, document.getElementById("render-target"));
});
