import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { Typography } from "@mui/material";
import { EpisodeApi } from "../../service/episodes";
import Episode from "./Episode";

const Episodes = () => {
  const { getAllEpisodes } = EpisodeApi;
  const { status, data } = useQuery("episodes", () => getAllEpisodes());

  if (status === "loading") {
    return <h1>Loading</h1>;
  }

  if (status === "error") {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <Typography variant="h2">Episodes</Typography>
      {data.results.map((episode) => {
        const episodeId = episode.id;
        console.log("🚀 ~ file: Episodes.js ~ line 25 ~ {data.results.map ~ episodeId", episodeId)
        return (
          <Link
            element={<Episode episodeId={episodeId} />}
            to={`/episodes/${episode.id}`}
            key={episode.id}
          >
            <Typography variant="h6">
              {episode.episode} - {episode.name} <em>{episode.airDate}</em>
            </Typography>
          </Link>
        );
      })}
      <Outlet />
    </div>
  );
};

export default Episodes;
