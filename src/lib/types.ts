export interface Product {
    id: string
    name: string
    price: number
    image: string
    brand: string
  }
  
  export interface Category {
    id: string
    name: string
    products: Product[]
  }
  
  