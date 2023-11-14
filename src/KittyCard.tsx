import React from "react";
import { Card } from "@workday/canvas-kit-react/card";
import { Box } from "@workday/canvas-kit-react/layout";
import { base, system } from "@workday/canvas-tokens-web";
import { createStyles } from "@workday/canvas-kit-styling";

const myHeadingStyles = createStyles({ color: `var(${base.jewel600})` });

// This component is intended to display different ways to style Canvas Kit components
// with our tokens and createStyle API
export const KittyCard = () => {
  return (
    <Card cs={{ width: "fit-content" }}>
      <Card.Heading cs={myHeadingStyles}>Canvas kit10</Card.Heading>
      <Card.Body>
        <Box
          as="img"
          cs={{ width: 300, borderRadius: `var(${system.shape.x2})` }}
          src={
            "https://t3.ftcdn.net/jpg/05/57/92/94/360_F_557929456_H0L12sooeJMSSnI98jMyqfzxd93dKOcP.jpg"
          }
        ></Box>
      </Card.Body>
    </Card>
  );
};
