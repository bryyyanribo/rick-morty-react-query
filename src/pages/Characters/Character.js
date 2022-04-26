import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { CharacterApi } from "../../service/characters";
import Episode from "../Episodes/Episode";

const Character = () => {
  const { id } = useParams();
  const { getCharacter } = CharacterApi;
  const { status, data } = useQuery(`character-${id}`, () => getCharacter(id));

  if (status === "loading") {
    return <h1>Loading</h1>;
  }

  if (status === "error") {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <Typography variant="h2">{data.name}</Typography>
      <TableContainer
        component={Paper}
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Feature</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Gender</TableCell>
              <TableCell>{data.gender}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>{data.status}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Species</TableCell>
              <TableCell>{data.species}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Origin</TableCell>
              <TableCell>{data.origin.name}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Typography variant="h4">Episodes</Typography>
      <Box sx={{ overflow: "auto", height: "calc(60vh)" }}>
        {data.episode.map((episode) => {
          const episodeUrlParts = episode.split("/").filter(Boolean);
          const episodeId = episodeUrlParts[episodeUrlParts.length - 1];

          return <Episode episodeId={episodeId} key={`episode-${episodeId}`} />;
        })}
      </Box>
    </div>
  );
};

export default Character;
