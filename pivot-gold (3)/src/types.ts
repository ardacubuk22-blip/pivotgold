export type Language = 'TR' | 'EN' | 'DE' | 'AR';

export interface Product {
  id: string;
  name: {
    [key in Language]: string;
  };
  category: {
    [key in Language]: string;
  };
  price: number;
  image: string;
  description: {
    [key in Language]: string;
  };
  details: {
    [key in Language]: string[];
  };
}

export interface CartItem extends Product {
  quantity: number;
}
