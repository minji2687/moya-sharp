import axios from "axios";



export type KeywordType = {
  termType: string;
  typeId: string;
}

const KEYWORD_API_URL = "/preferTerms/reports"

export async function GetAllMyKewords() {
  const response = await axios.get(`${KEYWORD_API_URL}`)

  console.log(response)
  return response.data
}

const Keyword = "/preferTerms"

export async function myKeywordApi(termType: string, typeId: number) {
  const response = await axios.get(`${Keyword}/${termType}/${typeId}`)

  return response
}
