export  type Data = {
    id:string,
    propduct:string,
    name:string,
    cost: number,
    count: number
  }

 export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;