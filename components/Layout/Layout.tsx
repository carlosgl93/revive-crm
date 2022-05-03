import { Box } from "@mui/material";
import Head from "next/head";
import React, { FC } from "react";

interface Props {
  title?: string;
  children: React.Component;
}

const Layout = ({ title = "OpenJira", children }: Props): JSX.Element => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title> {title}</title>
      </Head>

      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};

export default Layout;
