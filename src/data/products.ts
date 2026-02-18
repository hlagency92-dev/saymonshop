import productCanon from "@/assets/product-canon.jpg";
import productSony from "@/assets/product-sony.jpg";
import productNikon from "@/assets/product-nikon.jpg";
import productGimbal from "@/assets/product-gimbal.jpg";
import categoryLenses from "@/assets/category-lenses.jpg";
import categoryAudio from "@/assets/category-audio.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Canon EOS R5 Boîtier",
    category: "Caméra",
    brand: "Canon",
    price: 3899,
    oldPrice: 4599,
    discount: 15,
    image: productCanon,
    badge: "-15%",
    rating: 4.8,
    reviews: 127,
  },
  {
    id: 2,
    name: "Sony Alpha A7 IV",
    category: "Caméra",
    brand: "Sony",
    price: 2799,
    oldPrice: 3199,
    discount: 12,
    image: productSony,
    badge: "-12%",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Nikon Z6 III + 24-70mm",
    category: "Caméra",
    brand: "Nikon",
    price: 3299,
    oldPrice: 3799,
    discount: 13,
    image: productNikon,
    badge: "-13%",
    rating: 4.7,
    reviews: 64,
  },
  {
    id: 4,
    name: "DJI Ronin RS4 Pro Gimbal",
    category: "Stabilisateur",
    brand: "DJI",
    price: 499,
    oldPrice: 599,
    discount: 17,
    image: productGimbal,
    badge: "-17%",
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 5,
    name: "Canon EF 85mm f/1.4L IS",
    category: "Objectifs",
    brand: "Canon",
    price: 1349,
    oldPrice: 1599,
    discount: 15,
    image: categoryLenses,
    badge: "-15%",
    rating: 4.8,
    reviews: 91,
  },
  {
    id: 6,
    name: "Rode VideoMic NTG",
    category: "Son & Audio",
    brand: "Rode",
    price: 249,
    oldPrice: 299,
    discount: 17,
    image: categoryAudio,
    badge: "-17%",
    rating: 4.6,
    reviews: 178,
  },
  {
    id: 7,
    name: "Sony FE 24-70mm f/2.8 GM",
    category: "Objectifs",
    brand: "Sony",
    price: 2199,
    oldPrice: 2499,
    discount: 12,
    image: categoryLenses,
    badge: "-12%",
    rating: 4.9,
    reviews: 112,
  },
  {
    id: 8,
    name: "Trépied Carbone Manfrotto",
    category: "Trépied",
    brand: "Manfrotto",
    price: 329,
    oldPrice: 399,
    discount: 18,
    image: categoryAccessories,
    badge: "-18%",
    rating: 4.7,
    reviews: 54,
  },
];

export const categories: Category[] = [
  { id: "objectifs", name: "Objectifs", image: categoryLenses, count: 48 },
  { id: "audio", name: "Son & Audio", image: categoryAudio, count: 32 },
  { id: "accessoires", name: "Accessoires", image: categoryAccessories, count: 65 },
];

export const brands = ["Tous", "Canon", "Sony", "Nikon", "Objectifs", "DJI"];
