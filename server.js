require("babel-register")({
  presets: ["react"],
});
const express = require("express");
const app = express();
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Component = require("./Component.jsx");

app.get("/", (req, res) => {
  //   const html = "<h1>Hello from server.js file</h1>";
  const html = ReactDOMServer.renderToString(React.createElement(Component));
  res.send(html);
});

app.listen(1234, () => console.log("server is running on localhost://1234"));
