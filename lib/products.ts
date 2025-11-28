export interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  description?: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Amber Nocturne",
    category: "Eau de Parfum",
    price: 18500,
    image: "https://i.pinimg.com/1200x/f3/2e/b5/f32eb50c386d148af48e1f4297af795a.jpg",
    description: "Warm amber blended with smoky vanilla and soft resin notes.",
  },
  {
    id: "2",
    name: "Jasmine Bloom",
    category: "Eau de Toilette",
    price: 14500,
    image: "https://i.pinimg.com/736x/4f/8e/28/4f8e28922d1c933dea94571379defe42.jpg",
    description: "Fresh jasmine petals with hints of citrus and green tea.",
  },
  {
    id: "3",
    name: "Oud Royale",
    category: "Luxury",
    price: 32000,
    image: "https://i.pinimg.com/736x/f0/37/3f/f0373f21fc613524111d6d01bec15270.jpg",
    description: "Deep oud wood infused with saffron, patchouli, and dark musk.",
  },
  {
    id: "4",
    name: "Rose Élégante",
    category: "Floral",
    price: 17000,
    image: "https://i.pinimg.com/736x/38/4a/13/384a13622d0c8e208aaa3f1cf038d10f.jpg",
    description: "Bulgarian rose with light pink pepper and velvet musk.",
  },
  {
    id: "5",
    name: "Citrus Breeze",
    category: "Fresh",
    price: 12000,
    image: "https://i.pinimg.com/736x/fe/5a/81/fe5a816990c116e1d7beb4d98e9846b5.jpg",
    description: "Energetic blend of bergamot, grapefruit, and sea mist.",
  },
  {
    id: "6",
    name: "Vanilla Noir",
    category: "Sweet",
    price: 13500,
    image: "https://i.pinimg.com/1200x/ba/47/91/ba4791de56baf72744a3350ae0245e07.jpg",
    description: "Dark vanilla layered with caramel, tonka bean, and soft woods.",
  },
]
