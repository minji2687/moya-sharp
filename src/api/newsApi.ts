import api from "./Api";


//sector, category, startup api 호출

const SEARCH_API_URL = "/search";

type Param = {
  keyType: string;
  paramValue: string;
  nextPageToken: string;
};

async function fetchNews({
  keyType,
  paramValue,
  nextPageToken
}: Param): Promise<any> {
  if (nextPageToken) {
    const response = await api.get(
      `${SEARCH_API_URL}/${keyType}/${paramValue}?nextPageToken=${nextPageToken}`
    );
    return response.data;
  }
  const response = await api.get(`${SEARCH_API_URL}/${keyType}/${paramValue}`);
  return response.data;
}

export { fetchNews };