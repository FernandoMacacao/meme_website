import { Grid } from "@mui/material";
import React, { useState } from "react";

const ImageSection = () => {
  return (
    <Grid container spacing={4} mb={10}>
      <Grid item xs={12} md={6}>
        <img
          src={require("assets/images/acc_1.jpg")}
          style={{ maxWidth: "100%", height: "100%" }}
          alt="acc1"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <img
              src={require("assets/images/acc_2.jpg")}
              style={{ maxWidth: "100%", height: "100%", cursor: "pointer" }}
              alt="acc1"
              onClick={() => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src={require("assets/images/ex_1.jpg")}
              style={{ maxWidth: "100%", height: "100%", cursor: "pointer" }}
              alt="acc1"
              onClick={() => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src={require("assets/images/ex_2.jpg")}
              style={{ maxWidth: "100%", height: "100%", cursor: "pointer" }}
              alt="acc1"
              onClick={() => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src={require("assets/images/ex_3.jpg")}
              style={{ maxWidth: "100%", height: "100%", cursor: "pointer" }}
              alt="acc1"
              onClick={() => {}}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImageSection;
