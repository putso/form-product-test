import { Data, Optional } from "../types";

export function getData():Data[] {
  console.log(localStorage.getItem('data'));
  const result = JSON.parse(localStorage.getItem('data') || 'null') || [];
  console.log(result)
  return result; 
}
