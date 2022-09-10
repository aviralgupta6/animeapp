import * as React from "react";
import videojs from "video.js";

// Styles
import "video.js/dist/video-js.css";

interface IVideoPlayerProps {
  options: videojs.PlayerOptions;
  onReady: any;
  isAnimeEpisodeDetailsLoading: Boolean;
}

const initialOptions: videojs.PlayerOptions = {
  controls: true,
  fluid: true,
  fill: true,
  controlBar: {
    volumePanel: {
      inline: false,
    },
  },
};

const VideoPlayer: React.FC<IVideoPlayerProps> = ({
  options,
  onReady,
  isAnimeEpisodeDetailsLoading,
}) => {
  const videoNode = React.useRef<HTMLDivElement>(null);
  const playerRef = React.useRef<videojs.Player>();

  React.useEffect(() => {
    if (isAnimeEpisodeDetailsLoading) {
      return;
    }
    if (!playerRef.current) {
      const placeholderEl = videoNode.current;
      if (!placeholderEl) return;

      const videoElement = placeholderEl.appendChild(
        document.createElement("video-js")
      );
      const player = (playerRef.current = videojs(
        videoElement,
        {
          ...initialOptions,
          ...options,
        },
        () => {
          videojs.log("Player is ready");
          onReady && onReady(player);
        }
      ));
    } else {
      const player = playerRef.current;
      const option: any = options.sources;
      player.src(option);
    }
  }, [options, videoNode, isAnimeEpisodeDetailsLoading]);

  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = undefined;
      }
    };
  }, [playerRef]);

  return <div ref={videoNode}></div>;
};

export default VideoPlayer;
