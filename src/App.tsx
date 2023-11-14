import * as React from "react";
import "@workday/canvas-tokens-web/css/base/_variables.css";
import "@workday/canvas-tokens-web/css/brand/_variables.css";
import "@workday/canvas-tokens-web/css/system/_variables.css";
import { base, system } from "@workday/canvas-tokens-web";
import {
  CanvasProvider,
  ContentDirection,
  PartialEmotionCanvasTheme,
  useTheme
} from "@workday/canvas-kit-react/common";
import { Flex } from "@workday/canvas-kit-react/layout";

import { GlobalStyles } from "./GlobalStyles";
import { SandboxNav } from "./Nav";
import { KittyCard } from "./KittyCard";

export default function App() {
  // useTheme is filling in the Canvas theme object if any keys are missing
  const canvasTheme: PartialEmotionCanvasTheme = useTheme({
    canvas: {
      // Switch to `ContentDirection.RTL` to change direction
      direction: ContentDirection.LTR
    }
  });

  return (
    <CanvasProvider theme={canvasTheme}>
      <GlobalStyles />
      <Flex flexDirection="column" minHeight="100vh">
        <SandboxNav />
        {/* Comment this out if you want to remove and create your own example */}
        <KittyCard />
      </Flex>
    </CanvasProvider>
  );
}
