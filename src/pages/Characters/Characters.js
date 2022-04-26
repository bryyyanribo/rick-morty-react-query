import React from "react";
import Character from "../Characters/Character";
import { Box } from "@mui/material";
import { useInfiniteQuery } from "react-query";
import { CharacterApi } from "../../service/characters";
import { Link, NavLink, Outlet } from "react-router-dom";
import BaseCard from "../../components/BaseCard";
import InfiniteScroll from "react-infinite-scroller";

const Characters = () => {
  const { getAllCharacters } = CharacterApi;
  const { data, status, hasNextPage, fetchNextPage } = useInfiniteQuery(
    "characters",
    getAllCharacters,
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.nextPage < lastPage.totalPages) {
          return lastPage.nextPage;
        }

        return undefined;
      },
    }
  );

  if (status === "loading") {
    return <h1>Loading</h1>;
  }

  if (status === "error") {
    return <h1>Error</h1>;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        id="container"
        sx={{ width: "30%", height: "calc(100vh)", overflow: "auto" }}
      >
        <InfiniteScroll
          hasMore={hasNextPage}
          loadMore={fetchNextPage}
          loader={
            <div className="loader" key={0}>
              Loading...
            </div>
          }
          useWindow={false}
          getScrollParent={() => document.getElementById("container")}
        >
          {data.pages.map((page) =>
            page.data.results.map((person) => {
              const { image, name, status, species, origin, location } = person;
              return (
                <NavLink
                  element={<Character />}
                  key={person.id}
                  to={`/characters/${person.id}`}
                  style={({ isActive }) => {
                    return {
                      textDecoration: "none",
                      display: "block",
                      margin: "1rem 0",
                      backgroundColor: isActive ? "green" : "",
                    };
                  }}
                >
                  <BaseCard
                    image={image}
                    name={name}
                    status={status}
                    species={species}
                    origin={origin}
                    location={location}
                  />
                </NavLink>
              );
            })
          )}
        </InfiniteScroll>
      </Box>
      <Box sx={{ width: "70%" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Characters;
