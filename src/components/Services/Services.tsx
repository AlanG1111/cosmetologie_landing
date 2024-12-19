import React from "react";
import { Typography } from "@mui/material";
import { ServicesList, ServicesListItem } from "./styles";

const Services = () => {
  return (
    <div className='main-content' id='services'>
      <h2>ЧИМ МИ МОЖЕМО ДОПОМОГТИ?</h2>
      <ServicesList>
        <ServicesListItem>
          <Typography variant='body2' color='text.secondary'>
            Робота з тестилем
          </Typography>
        </ServicesListItem>
        <ServicesListItem>
          <Typography variant='body2' color='text.secondary'>
            Робота з трикотажем
          </Typography>
        </ServicesListItem>
        <ServicesListItem>
          <Typography variant='body2' color='text.secondary'>
            Робота зі шкірою, хутром
          </Typography>
        </ServicesListItem>
        <ServicesListItem>
          <Typography variant='body2' color='text.secondary'>
            Пошив тюлі, штор
          </Typography>
        </ServicesListItem>
        <ServicesListItem>
          <Typography variant='body2' color='text.secondary'>
            Пошив постільної білізни
          </Typography>
        </ServicesListItem>
        <ServicesListItem>
          <Typography variant='body2' color='text.secondary'>
            Вкорочення довжини штанів, джинсів
          </Typography>
        </ServicesListItem>
        <ServicesListItem>
          <Typography variant='body2' color='text.secondary'>
            Терміновий ремонт одягу
          </Typography>
        </ServicesListItem>
        <ServicesListItem>
          <Typography variant='body2' color='text.secondary'>
            Заміна застібок, кнопок
          </Typography>
        </ServicesListItem>
      </ServicesList>
    </div>
  );
};

export default Services;
