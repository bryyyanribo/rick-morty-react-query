import React from "react";
import { Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { EpisodeApi } from "../../service/episodes";

const Episode = ({ episodeId }) => {
  const propsId = useParams();
  let id = episodeId || propsId.episodeId;

  const { getEpisode } = EpisodeApi;
  const { status, data } = useQuery(`episode-${id}`, () => getEpisode(id));

  if (status === "loading") return <h2>Loading...</h2>;

  if (status === "error") return <h2>Error :(</h2>;

  return (
    <div>
      <Typography variant="h6">{data.name}</Typography>
      <Typography variant="body1">{data.air_date}</Typography>
    </div>
  );
};

export default Episode;
