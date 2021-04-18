import React, { PropsWithChildren } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

type PageProps = PropsWithChildren<{}>;

function Page({ children, ...rest }: PageProps) {
  return (
    <Container style={{ marginTop: "5vh" }} maxWidth="lg">
      <Box {...rest}>{children}</Box>
    </Container>
  );
}

export default Page;
