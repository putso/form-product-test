import { nanoid } from "nanoid";
import { Data, Optional } from "../types";
import { getData } from "./getData";

export  function addField(data: Data) {
  data.id = nanoid();
  const localData = getData();
  const setData = [data,...localData];

  const json = JSON.stringify(setData);
  localStorage.setItem('data', json);
}
