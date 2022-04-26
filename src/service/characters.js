import API from "./api";
import { ENDPOINTS } from "./endpoints";

const getAllCharacters = async ({pageParam = 1}) => {
  try {
    const { data } = await API.get(`${ENDPOINTS.CHARACTER}/?page=${pageParam}`, {
      headers: {
        "Content-type": "application/json",
      },
    });
    return { data, nextPage: pageParam + 1, totalPages: 100 };
  } catch (error) {
    return error;
  }
};

const getCharacter = async (id) => {
  try {
    const { data } = await API.get(`${ENDPOINTS.CHARACTER}/${id}`, {
      headers: {
        "Content-type": "application/json",
      },
    });
    return await data;
  } catch (error) {
    return error;
  }
};

export const CharacterApi = {
  getAllCharacters,
  getCharacter,
};
