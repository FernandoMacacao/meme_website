import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

const InfoSection = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item spacing={2} xs={12} md={6}>
          <Stack mb={5}>
            <Typography variant="h6" color={"var(--clr-primary)"}>
              NOME DO APARTAMENTO
            </Typography>
            <Typography>Número de camas:</Typography>
            <Typography>Número de casas de banho:</Typography>
            <Typography>Número de hospedes:</Typography>
          </Stack>
          <Stack>
            <Typography variant="h6" color={"var(--clr-primary)"}>
              DESCRIÇÃO
            </Typography>
            <Typography>
              Commodo ex veniam cupidatat dolor aliqua. Quis veniam esse eiusmod
              fugiat pariatur aliquip ipsum in magna occaecat anim est laboris.
              Nulla ipsum enim sit non ad minim est consectetur amet duis qui
              cupidatat ipsum. Esse aute culpa sint irure voluptate magna do
              consequat eu ea voluptate amet pariatur ea.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} mb={10}>
          <Typography variant="h6" mb={3} color={"var(--clr-primary)"}>
            COMODIDADES
          </Typography>
          <Grid container spacing={3} mb={5}>
            <Grid item xs={6}>
              <Typography>Cozinha:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Casa de Banho:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Quartos:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Sala:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Dispensa:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Escritório:</Typography>
            </Grid>
          </Grid>
          <Typography variant="h6" color={"var(--clr-primary)"}>
            ALGUMA DUVIDA?
          </Typography>
          <Typography>Contacte-nos</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default InfoSection;