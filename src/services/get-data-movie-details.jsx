import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoints";
import http from "../utils/http";

const fetchDataMovieDetail = async (Id) => {
  const { data } = await http.get(API_ENDPOINT.NOW_DETAIL, {
    params: {
      movie_id: Id,
      language: "en-US",
    },
  });
  return data;
};

const useMovieDataDetailQuery = (Id) => {
  return useQuery(["userDataMovieDetail", Id], () => fetchDataMovieDetail(Id));
};
console.log(useMovieDataDetailQuery);
export { fetchDataMovieDetail, useMovieDataDetailQuery };
