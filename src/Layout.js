import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AccountMenu from "./AccountMenu";

const Layout = () => {
  const navigate = useNavigate();

  const handleOnClick = (page) => {
    navigate("/todo");
  };
  return (
    <>
      <Container maxWidth="sm">
        <AccountMenu onClick={handleOnClick} />
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            React Skills test
          </Typography>
        </Box>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
