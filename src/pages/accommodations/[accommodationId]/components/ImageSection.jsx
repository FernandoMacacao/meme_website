import { Grid } from "@mui/material";
import React, { useState } from "react";
import acc1 from "assets/images/acc_1.jpg";
import acc2 from "assets/images/acc_2.jpg";
import ex1 from "assets/images/ex_1.jpg";
import ex2 from "assets/images/ex_2.jpg";
import ex3 from "assets/images/ex_3.jpg";

const ImageSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(acc1);
  const [notSelected, setnotSelected] = useState([acc2, ex1, ex2, ex3]);

  return (
    <Grid container spacing={4} mb={10}>
      <Grid item xs={12} md={6}>
        <img
          src={selectedPhoto}
          style={{ maxWidth: "100%", height: "100%" }}
          alt="acc1"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <img
              src={notSelected[0]}
              style={{ maxWidth: "100%", height: "100%", cursor: "pointer" }}
              alt="acc1"
              onClick={() => {
                const save = selectedPhoto;
                setSelectedPhoto(notSelected[0]);
                setnotSelected((prevPhotos) => {
                  const updatedPhotos = [...prevPhotos];
                  updatedPhotos.splice(0, 1, save);
                  return updatedPhotos;
                });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src={notSelected[1]}
              style={{ maxWidth: "100%", height: "100%", cursor: "pointer" }}
              alt="acc1"
              onClick={() => {
                const save = selectedPhoto;
                setSelectedPhoto(notSelected[1]);
                setnotSelected((prevPhotos) => {
                  const updatedPhotos = [...prevPhotos];
                  updatedPhotos.splice(1, 1, save);
                  return updatedPhotos;
                });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src={notSelected[2]}
              style={{ maxWidth: "100%", height: "100%", cursor: "pointer" }}
              alt="acc1"
              onClick={() => {
                const save = selectedPhoto;
                setSelectedPhoto(notSelected[2]);
                setnotSelected((prevPhotos) => {
                  const updatedPhotos = [...prevPhotos];
                  updatedPhotos.splice(2, 1, save);
                  return updatedPhotos;
                });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src={notSelected[3]}
              style={{ maxWidth: "100%", height: "100%", cursor: "pointer" }}
              alt="acc1"
              onClick={() => {
                const save = selectedPhoto;
                setSelectedPhoto(notSelected[3]);
                setnotSelected((prevPhotos) => {
                  const updatedPhotos = [...prevPhotos];
                  updatedPhotos.splice(3, 1, save);
                  return updatedPhotos;
                });
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImageSection;
