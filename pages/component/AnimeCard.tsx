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
    <>
      <div>
        <img src={animeImg} />
        <span>{animeTitle}</span>
      </div>
    </>
  );
}

export default AnimeCard;
