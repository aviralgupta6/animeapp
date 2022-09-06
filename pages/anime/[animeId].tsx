import type { NextPage } from "next";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { AnimeDetailsType } from "../../interfaces";
import { baseUrl } from "../../constants/constant";
import useSWR from "swr";
import useFetcher from "../api/fetcher";
import Image from "next/image";

function AnimeTemplate(props: AnimeDetailsType) {
  const { query, isReady } = useRouter();
  const { animeId } = query;
  const urls = `${baseUrl}/anime-details/${animeId}`;

  const getAnimeDetails = (url: string) =>
    fetch(urls).then((res) => res.json());

  const { data, error } = useSWR<AnimeDetailsType[]>(
    isReady ? `/api/animeDetails` : null,
    getAnimeDetails
  );

  // const {
  //   animeImg,
  //   animeTitle,
  //   episodesList,
  //   genres,
  //   otherNames,
  //   releasedDate,
  //   status,
  //   synopsis,
  //   totalEpisodes,
  //   type,
  // } = data;
  console.log(data);

  return (
    <>
      {data ? (
        <>
          <h2>{data.animeTitle}</h2>
          <Image src={data.animeImg} width="40" height="70" />
          {data.episodesList?.map(({ episodeId, episodeNum }) => (
            <ul key={episodeId}>
              <li>
                <a>
                  {episodeNum} {episodeId}
                </a>
              </li>
            </ul>
          ))}
        </>
      ) : (
        <>No data found</>
      )}
    </>
  );
}

export default AnimeTemplate;
