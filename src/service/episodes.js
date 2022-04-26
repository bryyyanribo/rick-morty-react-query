import API from "./api";
import { ENDPOINTS } from "./endpoints";

const getAllEpisodes = async () => {
  try {
    const { data } = await API.get(`${ENDPOINTS.EPISODE}`, {
      headers: {
        "Content-type": "application/json",
      },
    });
    return await data;
  } catch (error) {
    return error;
  }
};

const getEpisode = async (id) => {
  try {
    const { data } = await API.get(`${ENDPOINTS.EPISODE}/${id}`, {
      headers: {
        "Content-type": "application/json",
      },
    });
    return await data;
  } catch (error) {
    return error;
  }
};

export const EpisodeApi = {
  getAllEpisodes,
  getEpisode,
};
