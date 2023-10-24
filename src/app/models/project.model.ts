export interface Projects{
  img:string;
  title:string;
  description:string;
  skills:string[];
  linkFront?:string | null;
  linkBakend?:string | null;
}

export type back = "back";
export type front = "front";
