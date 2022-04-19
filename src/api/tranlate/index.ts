import axios from "axios";

type Prameter = [newsTitle: string, newsDescription: string];

export const postTranslateAxios = async ([
  newsTitle,
  newsDescription
]: Prameter) => {
  const TranslateAxiosBody = {
    token: "sysmetic1234",
    targetLists: [newsTitle, newsDescription]
  };
  const response = await axios.post(
    "https://api.moya.ai/translate_moya",
    TranslateAxiosBody
  );
  return response;
};
