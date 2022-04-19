import api from "./Api";
export type NewsType = {
  additionalData: {};
  assetTags: [];
  category: string;
  cityfalconScore: Number;
  cityfalcon_permalink: string;
  description: string;
  duplicatesCount: Number;
  imageUrls: [];
  lang: string;
  paywall: boolean;
  publishTime: string;
  registrationRequired: boolean;
  searchTags: [];
  source: {};
  title: string;
  url: string;
  uuid: string;
};

export type SearchType = {
  orderBy: string;
  keyType: string;
  paramValue: string;
  language: string;
  timeFilter: string;
  mediaType: string;
  exchange?: string;
  [propsName: string]: any;
  nextPageToken: string | null;
};

export async function getNewList(searchPayload: SearchType) {
  const NEWS_API_URL = "/search";
  var params = new URLSearchParams();
  
  for (let key in searchPayload) {
    params.append(key, searchPayload[key]);
  }

  if (searchPayload.nextPageToken) {
    params.append("nextPageToken", searchPayload.nextPageToken);
  }
  const response = await api.get(NEWS_API_URL, { params });
  return response.data;
}
