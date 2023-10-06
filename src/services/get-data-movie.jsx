import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoints";

const fetchDataMovie = async ({ queryKey }) => {
  // untuk handle api
  // const { data } = await http.get(`${API_ENDPOINT.NOW_PLAYING}page=${page ? page : 1}`);
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useMovieDataQuery = (options) => {
  // return useQuery(["userDataNowPlaying", page], () => fetchDataMovie(page));
  return useQuery([API_ENDPOINT.NOW_PLAYING, options], fetchDataMovie);
};
export { fetchDataMovie, useMovieDataQuery };
