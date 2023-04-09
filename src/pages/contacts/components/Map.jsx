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
    <Box mt={10} display="flex">
      <Container maxWidth="lg">
        {!isLoaded ? (
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
        )}
      </Container>
    </Box>
  );
};
