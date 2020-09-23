const React = require("react");
const ReactClass = require("create-react-class");

module.exports = ReactClass({
  render() {
    // return React.createElement("h1", null, "Hello from component.jsx");
    return (
      <React.Fragment>
        <h1>Hello from component.jsx</h1>
        <button onClick={this.clickHandler}>Click to alert</button>
      </React.Fragment>
    );
  },
});
