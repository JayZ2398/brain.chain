import React, { PropsWithChildren } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

type PageProps = PropsWithChildren<{}>;

function Page({ children, ...rest }: PageProps) {
  return (
    // <Box
    //   width="90vw"
    //   marginTop="5vh"
    //   flexGrow="1"
    //   marginLeft="auto"
    //   marginRight="auto"
    //   {...rest}
    // >
    <Container maxWidth="lg">
      <Box {...rest}>{children}</Box>
    </Container>
    // </Box>
  );
}

export default Page;
