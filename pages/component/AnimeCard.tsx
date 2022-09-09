import type { AnimeCardType } from "../../interfaces";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function AnimeCard(props: AnimeCardType) {
  const {
    animeId,
    episodeId,
    animeTitle,
    episodeNum,
    subOrDub,
    animeImg,
    episodeUrl,
  } = props;
  return (
    <Card sx={{ width: 220, height: 400, margin: 0.5 }}>
      <CardActionArea href={`/anime/${animeId}`}>
        <CardMedia
          component="img"
          height="90"
          image={animeImg}
          alt={animeTitle}
          sx={{
            objectFit: "cover",
            height: "330px",
          }}
        />
        <CardContent
          sx={{
            height: "70px",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {animeTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
