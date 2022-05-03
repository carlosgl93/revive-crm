import { Box, Grid } from "@mui/material";
import React from "react";
import Excel from "../components/Excel";
import Layout from "../components/Layout/Layout";
import Payku from "../components/Payku";

const Dashboard = () => {
  return (
    <Layout title={"Revive"}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ height: "50vh" }}>
            <Box>
              <Payku />
            </Box>
          </Box>
          <Box>
            <Box>Testing env variables in vercel</Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Excel />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
