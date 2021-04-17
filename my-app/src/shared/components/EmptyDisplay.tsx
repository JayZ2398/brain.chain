import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { WithStyle } from "../types";

type EmptyDisplayProps = WithStyle & {
  picture: React.ReactNode;
  text: string;
};

function EmptyDisplay({ picture, text, style, ...rest }: EmptyDisplayProps) {
  return (
    <Box
      style={{
        display: "grid",
        placeItems: "center",
        ...(style ? style : {}),
      }}
      {...rest}
    >
      {picture}
      <Typography>{text}</Typography>
    </Box>
  );
}

export default EmptyDisplay;
