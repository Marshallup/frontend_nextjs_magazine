import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Typography, Grid } from '@mui/material';
import GoodsList from 'components/GoodsList';
import { FilterGrid, GoodsGrid } from 'styles/pages';
import FilterPanel from 'components/FilterPanel';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>E-magazine - список товаров</title>
        <meta name="description" content="Список товаров" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography variant="h2">
        Главная
      </Typography>

      <Grid container>

        <FilterGrid item>
          <FilterPanel />
        </FilterGrid>
        
        <GoodsGrid item>
          <GoodsList />
        </GoodsGrid>
      
      </Grid>

    </Fragment>
  )
}

export default Home
