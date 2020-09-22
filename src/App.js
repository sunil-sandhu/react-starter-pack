import React from "react";

import { css } from "@emotion/core";

const AppCss = css`
  padding: 32px;
  background-color: #2ad9ff;
  font-size: 24px;
  border-radius: 4px;

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: hotpink;
    }
  }
`;

const App = () => (
  <div css={AppCss}>
    <h1>React Starter Pack!</h1>
    <h3>A minimal (but still batteries included) React starter setup for building web apps</h3>
    <p>
      <a href="https://twitter.com/sunilsandhu">@sunilsandhu</a>
    </p>
  </div>
);

export default App;
