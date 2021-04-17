import React, { PropsWithChildren } from "react";
import Box from "@material-ui/core/Box";

type PageProps = PropsWithChildren<{}>;

function Page({ children, ...rest }: PageProps) {
  return (
    <Box
      width="90vw"
      marginTop="5vh"
      flexGrow="1"
      marginLeft="auto"
      marginRight="auto"
      {...rest}
    >
      {children}
    </Box>
  );
}

export default Page;
