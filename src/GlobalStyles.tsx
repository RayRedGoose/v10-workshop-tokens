import * as React from "react";
import { Global, css } from "@emotion/react";
import { fonts } from "@workday/canvas-kit-react-fonts";
import { type } from "@workday/canvas-kit-react/tokens";

const globalStyles = css({
  ...fonts,
  "html, body": {
    fontFamily: type.properties.fontFamilies.default,
    margin: 0,
    minHeight: "100vh"
  },
  "#root, #root < div": {
    minHeight: "100vh",
    ...type.levels.body.small
  }
});

console.log(fonts);

// Apply global base and font styles for the app
export const GlobalStyles = () => <Global styles={globalStyles} />;
