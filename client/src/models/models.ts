export interface iUser {
  name?: string;
  email: string;
  password: string;
  phone?: string;
}

export interface iProduct {
  _id: string;
  id: string;
  url: string;
  detailUrl: string;
  title: {
    shortTitle: string;
    longTitle: string;
  };
  price: {
    mrp: number;
    cost: number;
    discount: string;
  };
  quantity: number;
  description: string;
  discount: string;
  tagline: string;
  __v: number;
}
