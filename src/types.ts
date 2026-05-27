export type Language = 'TR' | 'EN';

export interface Product {
    id: string;
    name: {
      [key in Language]: string;
    };
    category: {
      [key in Language]: string;
    };
    price: number;
    currency: string;
    image: string;
    images?: string[];
    material?: string;
    weight?: string;
    description: {
      [key in Language]: string;
    };
    details: {
      [key in Language]: string[];
    };
    badge?: string;
    inStock?: boolean;
}

export interface CartItem extends Product {
    quantity: number;
}
