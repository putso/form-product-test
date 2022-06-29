import { Data, Optional } from "../types";

const url = 'http://form/delete-data.php';
export function  deleteData(data:Data) {
  let json:Data[] = JSON.parse( localStorage.getItem('data') || '');
  json = json.filter(el => el.id !== data.id);
  localStorage.setItem('data', JSON.stringify(json));

}