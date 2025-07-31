//DTO stand for data transfer modal
export interface ProductDto {
  title: string;
  category: string;
  Oprice: number;
  Nprice: number;
  image: string;
  feature: string;
  images?: string[];
  rating?: number;
  tags?: string[];
  sku?: string;
  price?: number;
  discountPercentage?: number;
  stock?: number;
  meta?:Meta;
  availabilityStatus?:string;
  id?: number;
}

export interface ProductResponse {
  slice(arg0: number, arg1: number): ProductDto | null;
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  [x: string]: any;
  id?: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta?: Meta;
  images: string[];
  thumbnail: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  barcode: string;
  qrCode: string;
}
