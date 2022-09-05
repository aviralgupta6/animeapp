import exp from "constants";
import useSWR from "swr";
import { AnimeCardType } from "../../interfaces";

function fetcher(query: any) {
  const { data, error } = useSWR<AnimeCardType[]>(`/api/${query}`, query);
  return { data, error };
}

export default fetcher;
