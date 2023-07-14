import { Box, Container, Typography } from "@mui/material";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import React, { useMemo } from "react";

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(
    () => ({ lat: 38.77868168090565, lng: -9.096689988635774 }),
    []
  );
  return (
    <Box mt={5} mb={10}>
      <Container
        sx={{
          overflow: "hidden",
          width: { xs: 380, sm: 500, md: "59dvw" },
          height: { xs: "50dvh", sm: "50dvh", md: "70dvh" },
        }}
      >
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.2749680787592!2d-7.546819915958051!3d40.402758997806686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3cd9d423bb93c3%3A0xdc081984401f08d2!2sCasinhas%20Do%20M%C3%A9-Me!5e0!3m2!1spt-PT!2spt!4v1689330209178!5m2!1spt-PT!2spt"
          style={{
            border: 0,
            display: "block",
            margin: "auto",
            width: "100%",
            height: "100%",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {/*!isLoaded ? (
          <Typography variant="body1" color="textPrimary">
            Loading...
          </Typography>
        ) : (
          <div data-aos="zoom-in">
            <GoogleMap
              zoom={19}
              center={center}
              mapContainerClassName="map-container"
            >
              <MarkerF position={center} />
            </GoogleMap>
          </div>
        )*/}
      </Container>
    </Box>
  );
};
