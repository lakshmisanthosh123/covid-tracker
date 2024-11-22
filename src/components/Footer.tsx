import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 2,
        mt: 4,
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} COVID-19 Tracker | All rights reserved.
        </Typography>
        <Typography variant="body2">
          Data Source: Official COVID-19 APIs or datasets
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
