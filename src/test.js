/**
 * test
 */

import {mreact} from './mreact'

const element = mreact.createElement(
  "div",
  {id: "text-element"},
  mreact.createElement("a", null, "bar"),
  mreact.createElement("b")
)

/** @jsx mreact.createElement */
const jsxElement = (
  <div id="text-element">
    <a>bar</a>
    <b/>
  </div>
)

const container = document.getElementById('root')
