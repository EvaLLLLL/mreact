/**
 * index
 */

import { mreact } from "./mreact";

const domRoot = document.getElementById("root");

const mInput = mreact.createElement("input");
mreact.render(mInput, domRoot);

/** @jsx mreact.createElement */
const JSXElement = (
  <div id="container">
    <input value="foo" type="text" />
    <span onClick={() => console.log("Hi")}>click me</span>
  </div>
);
mreact.render(mInput, JSXElement);
