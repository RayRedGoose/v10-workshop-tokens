import * as React from "react";
import { ExternalHyperlink } from "@workday/canvas-kit-react/button";
import { Flex } from "@workday/canvas-kit-react/layout";
import { Text } from "@workday/canvas-kit-react/text";
import { base, system } from "@workday/canvas-tokens-web";

export const SandboxNav = () => {
  return (
    <Flex
      as="nav"
      role="navigation"
      alignItems="center"
      justifyContent="space-between"
      padding="s"
      cs={{
        backgroundColor: `var(${base.jewel600})`,
        marginBottom: `var(${system.space.x6})`
      }}
    >
      <Text typeLevel="body.large" variant="inverse">
        V10 Sandbox
      </Text>
      <Flex gap="xs">
        <ExternalHyperlink
          href="https://canvas.workday.com/v9"
          variant="inverse"
        >
          Docs
        </ExternalHyperlink>
        <ExternalHyperlink
          href="https://github.com/workday/canvas-kit"
          variant="inverse"
        >
          GitHub
        </ExternalHyperlink>
        <ExternalHyperlink
          href="https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs"
          variant="inverse"
        >
          Tokens
        </ExternalHyperlink>
      </Flex>
    </Flex>
  );
};
