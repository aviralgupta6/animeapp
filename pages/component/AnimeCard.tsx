import type { AnimeCardType } from "../../interfaces";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

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
      <Link href={`/anime/${animeId}`}>
        <CardActionArea>
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
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
