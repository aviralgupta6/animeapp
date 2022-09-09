import type { NextPage } from "next";
import type { AnimeCardType } from "../../interfaces";

import useSwr from "swr";
import { baseUrl } from "../../constants/constant";
import { Fragment } from "react";
import AnimeCard from "../component/AnimeCard";
import Head from "next/head";
const url = `${baseUrl}/popular`;

import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, Pagination, Skeleton } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const popular = (url: string) => fetch(url).then((res) => res.json());

const Popular: NextPage = () => {
  const [pageIndex, setPageIndex] = React.useState(1);
  const { data, error } = useSwr<AnimeCardType[]>(
    `/api/popular?page=${pageIndex}`,
    () => popular(url + "?page=" + pageIndex)
  );
  const isLoading = !error && !data;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageIndex(value);
  };

  return (
    <Fragment>
      <Head>
        <title>Popular</title>
      </Head>
      <div>
        {!isLoading && data ? (
          <Box>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {data?.map((animeData) => (
                <AnimeCard {...animeData} key={animeData.animeId} />
              ))}
            </Grid>
            <Pagination count={10} page={pageIndex} onChange={handleChange} />
          </Box>
        ) : (
          <>
            <Box>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {[...Array(20)].map((item, i) => (
                  <Card sx={{ margin: 0.5 }} key={i}>
                    <Skeleton
                      sx={{ height: 330, width: 220 }}
                      animation="wave"
                      variant="rectangular"
                    />
                    <Skeleton
                      sx={{ height: 70, width: 220 }}
                      animation="wave"
                      variant="rectangular"
                    />
                  </Card>
                ))}
              </Grid>
              <Pagination count={10} page={pageIndex} onChange={handleChange} />
            </Box>
          </>
        )}
      </div>
    </Fragment>
  );
};

export default Popular;
