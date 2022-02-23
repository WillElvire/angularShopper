export interface product{
  id: number;
  name: string;
  price: number;
  img: string;
  num: string;
  checked: boolean;
  description: string;
}

export interface cart{
  id: number;
  product : [product];
}
