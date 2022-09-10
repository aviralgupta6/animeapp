import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AnimeDetailsType } from "interfaces/index";
import { baseUrl } from "constants/constant";
import useSWR from "swr";
import Image from "next/image";
import VideoPlayer from "pages/component/VideoPlayer";
import videojs from "video.js";
import { Button } from "@mui/material";
import Link from "next/link";

function AnimeTemplate(props: AnimeDetailsType) {
  const router = useRouter();
  const { query, isReady } = router;
  const { animeId, ep } = query;

  const urls = `${baseUrl}/anime-details/${animeId}`;
  const [videoUrl, setVideoUrl] = useState("");
  const playerRef = useRef<any>(null);

  const getAnimeDetails = (url: string) =>
    fetch(urls).then((res) => res.json());

  const getAnimeEpisodeDetails = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, error } = useSWR<AnimeDetailsType>(
    isReady ? `/api/animeDetails` : null,
    getAnimeDetails
  );

  useEffect(() => {
    console.count("PAGE Mouteed");
    return () => {
      console.count("PAGE unmoutned");
    };
  });

  const isLoading = !data && !error;
  console.log(isLoading);

  if (!isLoading && data && !ep) {
    router.query.ep = data.episodesList[0].episodeNum?.toString();

    router.replace(router);
  }

  const { data: animeEpisodeData, error: animeEpisodeError } = useSWR(
    ep ? `/api/animeEpisodes` : null,
    () =>
      getAnimeEpisodeDetails(`${baseUrl}/vidcdn/watch/${animeId}-episode-${ep}`)
  );

  const isAnimeEpisodeDetailsLoading = !animeEpisodeData && !animeEpisodeError;

  useEffect(() => {
    if (ep)
      getAnimeEpisodeDetails(
        `${baseUrl}/vidcdn/watch/${animeId}-episode-${ep}`
      );
  }, [ep]);

  useEffect(() => {
    if (animeEpisodeData?.error || animeEpisodeError) {
      router.replace(`/anime/${animeId}`);
      return;
    }

    if (animeEpisodeData?.sources[0].file)
      setVideoUrl((prevState) => {
        if (prevState === animeEpisodeData?.sources[0].file) return prevState;
        return animeEpisodeData?.sources[0].file;
      });
  }, [animeEpisodeData, animeEpisodeError]);

  // const itemUrlSetter = (id: any) => {
  //   if (id) {
  //     const episodeIdUrl = `${baseUrl}/vidcdn/watch/${id}`;
  //     setEpisodeUrl(episodeIdUrl);
  //   }
  // };

  const handleEpisodeClick = (event: React.ChangeEvent<unknown>) => {
    const episodeId = (event.target as HTMLButtonElement).id;

    console.log(router);

    router.query.ep = episodeId;
    router.push(router);
    // router.replace(``);

    // const videoElm = playerRef.current;
    // itemUrlSetter(itemId);
    // if (videoElm) {
    //   if (!videoElm.paused) {
    //     videoElm.pause();
    //   }
    //   videoElm.load();
    //   videoElm.play();
    // }
  };

  const videoJsOptions = {
    sources: [
      {
        src: videoUrl,
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    if (playerRef.current) {
      const player = playerRef.current;
      player.pause();
    }
    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      {!isLoading ? (
        <>
          {data ? (
            <>
              <h2>{data.animeTitle}</h2>
              <Image src={data.animeImg} width="40" height="70" />

              {!isAnimeEpisodeDetailsLoading ? (
                <VideoPlayer
                  options={videoJsOptions}
                  onReady={handlePlayerReady}
                  isAnimeEpisodeDetailsLoading={isAnimeEpisodeDetailsLoading}
                />
              ) : (
                <></>
              )}

              {data.episodesList?.map(({ episodeId, episodeNum }) => (
                <ul key={episodeId}>
                  <li>
                    {/* <Link href={`/anime/${animeId}?ep=${episodeNum}`}> */}
                    <Button
                      id={episodeNum?.toString()}
                      onClick={handleEpisodeClick}
                    >
                      {episodeNum} {episodeId}
                    </Button>
                    {/* </Link> */}
                  </li>
                </ul>
              ))}
            </>
          ) : (
            <>No data found</>
          )}
        </>
      ) : (
        <>LOADING</>
      )}
    </>
  );
}

export default AnimeTemplate;
