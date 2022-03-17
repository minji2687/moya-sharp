import axios from "axios";

export type NewsType = {
  additionalData: {};
  assetTags: [];
  category: String;
  cityfalconScore: Number;
  cityfalcon_permalink: String;
  description: String;
  duplicatesCount: Number;
  imageUrls: [];
  lang: String;
  paywall: boolean;
  publishTime: String;
  registrationRequired: boolean;
  searchTags: [];
  source: {};
  title: String;
  url: String;
  uuid: String;
};

type NewsListType = {
  nextPageToken: string;
  stories: NewsType[];
};

export type QuaryStringType = {
  identifier_type: "assets" | "tickers" | "full_tickers" | "legal_id";
  identifiers: String;
  time_filter: String;
  categories: String;
  min_cityfalcon_score?: Number;
  languages: string;
  order_by: "top" | "latest" | "populer";
  access_token: String;
};

export type SearchPayload = {
  identifiers: string;
  language: string;
  timeFilter: string;
  categories: string;
};

export type SearchTitleType = "Category" | "Sector" | "Startup";

export async function getNewList(searchPayload: SearchPayload) {
  let payload: QuaryStringType = {
    identifier_type: "assets",
    identifiers: searchPayload.identifiers,
    time_filter: searchPayload.timeFilter,
    categories: searchPayload.categories,
    min_cityfalcon_score: 0,
    languages: searchPayload.language,
    order_by: "top",
    access_token:
      "ea67d29c683a69e808a26cc6dc5a1445df84876e9e2d7aaf3d6f084210dce775"
  };
  const NEWS_API_URL = "https://api.cityfalcon.com/v0.2/stories?limit=10";
  const response = await axios.get(NEWS_API_URL, {
    params: {
      identifier_type: payload.identifier_type,
      identifiers: payload.identifiers,
      time_filter: payload.time_filter,
      categories: payload.categories,
      languages: payload.languages,
      min_cityfalcon_score: 0,
      order_by: "top",
      access_token: payload.access_token
    }
  });

  //todo : sector에 따라 다른 파라미터 넣어주기
  console.log(response);
  return response;
}
