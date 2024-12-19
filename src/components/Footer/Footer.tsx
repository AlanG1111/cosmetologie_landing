import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "var(--main-bg-color)",
        p: 6,
        width: "100%",
      }}
      component='footer'
    >
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' color='text.primary' gutterBottom>
              Про нас
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Ательє ремонту та пошиття одягу "SmartАтельє" - ваш надійний
              партнер у відновленні і створенні стильного одягу. Якість та
              професіоналізм - наші основні пріоритети. Звертайтесь до нас і
              переконайтесь у нашій дбайливості до деталей та індивідуальному
              підході до кожного замовлення.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' color='text.primary' gutterBottom>
              Контакти
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Київ,пр.Оболонський, 16є
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              smart.atelier.kyiv@gmail.com
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              +38050-549-54-60
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' color='text.primary' gutterBottom>
              Слідкуйте за нами
            </Typography>
            <Link href='https://www.facebook.com/' className='custom-link'>
              <Facebook />
            </Link>
            <Link
              href='https://www.instagram.com/'
              className='custom-link'
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant='body2' color='text.secondary' align='center'>
            {"Copyright © "}
            <Link color='inherit' href='/'>
              Косметолог естетист
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
