import api from "./Api";

const SEARCH_API_URL = "/master";

async function masterApi() {
  const response = await api.get(SEARCH_API_URL);
  return response.data;
}

export { masterApi };

console.log(masterApi())