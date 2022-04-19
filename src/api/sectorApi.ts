import api from "./Api";
// import axios from "axios";
const SEARCH_API_URL = "/search";

async function fetchSectorKeyword(keyType: string, identifier: string) {
  const response = await api.get(
    `${SEARCH_API_URL}/${keyType}/${"green-hydrogen"}`
  );
  console.log(response);
  return response;
}

export { fetchSectorKeyword };
