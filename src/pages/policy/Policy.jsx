import { SectionHeader } from "common/components/SectionHeader";
import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import Data from "./data/index.json";
import { Box, Container, Grid } from "@mui/material";

export const Policy = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Box my={10}>
      <SectionHeader
        title={Data[language].title}
        subtitle={Data[language].subtitle}
      />
      <Container maxWidth="md">
        {Data[language].texts.map((t, id) => (
          <Typography
            variant="body1"
            color="textPrimary"
            key={id}
            mb={id === 2 ? undefined : 2}
            textAlign="center"
          >
            {t.text}
          </Typography>
        ))}
        <Grid container columnSpacing={5} mt={2} mb={5}>
          <Grid item xs={12} md={6} textAlign={"center"}>
            <Typography fontWeight={700}>Proteção do Ambiente</Typography>
            <Typography mb={2}>
              Procuramos melhorar continuamente o desempenho ambiental inerente
              à atividade que desenvolvemos:
            </Typography>
            <ul>
              <li>
                <Typography>
                  As Casinhas do Mé-Mé estão implantadas em edifícios
                  requalificados, reduzindo o impacto ambiental da construção e
                  promovendo a regeneração urbana da Vila de Manteigas;
                </Typography>
              </li>
              <li>
                <Typography>
                  Procuramos minimizar a produção de resíduos através de medidas
                  de reutilização e de separação seletiva. As Casinhas do Mé-Mé
                  tem recipientes onde os hóspedes podem separar devidamente o
                  seu lixo;
                </Typography>
              </li>
              <li>
                <Typography>
                  Fomentamos, junto dos nossos clientes, o consumo de água da
                  rede pública (água potável de nascentes da Serra da Estrela);
                </Typography>
              </li>
              <li>
                <Typography>
                  Promovemos, junto dos nossos clientes, uma utilização
                  eficiente da água e da energia.
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6} textAlign={"center"}>
            <Typography fontWeight={700}>
              Desenvolvimento da Economia Local
            </Typography>
            <Typography mb={2}>
              No desenvolvimento da nossa atividade privilegiamos a aquisição de
              produtos e serviços locais:
            </Typography>
            <ul>
              <li>
                <Typography>
                  Uma parte considerável das mobílias do nosso Alojamento Local
                  foi restaurada e reutilizada;
                </Typography>
              </li>
              <li>
                <Typography>
                  A manutenção das nossas instalações e da mobília é feita com
                  mão-de-obra local;
                </Typography>
              </li>
              <li>
                <Typography>
                  Os nossos cortinados foram feitos por costureiras da Vila de
                  Manteigas;
                </Typography>
              </li>
              <li>
                <Typography>
                  Os nossos cobertores foram produzidos em fábricas da região da
                  Serra da Estrela;
                </Typography>
              </li>
              <li>
                <Typography>
                  O nosso azeite é de produtores do distrito da Guarda;
                </Typography>
              </li>
              <li>
                <Typography>
                  Informamos os nossos clientes sobre os produtos locais
                  disponíveis para venda e de qualidade reconhecida;
                </Typography>
              </li>
              <li>
                <Typography>
                  Disponibilizamos informação sobre o património natural e
                  cultural da Serra da Estrela, bem como de conduta para a sua
                  preservação.
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
