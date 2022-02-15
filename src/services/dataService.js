import { BASE_URL } from "../utils/serviceHelpers";

export const fetchData = async (params = null) => {
  //TODO: implement params call
  return await (await fetch(BASE_URL)).json();
};
