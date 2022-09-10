import useSWR from "swr";
import { AnimeDetailsType } from "../../interfaces";

function useFetcher(query: any, isReady: boolean) {
  const { data, error } = useSWR<AnimeDetailsType[]>(
    isReady ? `/api/${query}` : null,
    query
  );
  return { data, error };
}

export default useFetcher;
