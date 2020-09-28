export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface CartProduct extends Product {
  quantity: number;
}
