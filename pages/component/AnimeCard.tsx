import Image from "next/image";
import type { AnimeCardType } from "../../interfaces";

function AnimeCard(props: AnimeCardType) {
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
    <div>
      <a href={`/anime/${animeId}`}>
        <Image src={animeImg} alt={animeTitle} width="200" height="250" />
        <span>{animeTitle}</span>
      </a>
    </div>
  );
}

export default AnimeCard;
