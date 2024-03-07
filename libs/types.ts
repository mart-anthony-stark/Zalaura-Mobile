export type Product = {
  id?: number;
  title: string;
  price: number;
  category: string;
  description: string;
  discount?: number;
  image: string;
  rate: Rating
};

type Rating = {
  rate: number;
  count: number
}



// export const products: Product[] = [
//   {
//     id: 1,
//     slug: "nike-dunk-low-retro-men-s-shoes-white-3195806",
//     name: "Dunk Low Retro Men's Shoes",
//     description: "This is a product",
//     rate: 4.3,
//     price: "3,500.00",
//     discount: 0.1, // 10% discount represented as 0.1 in decimal format
//     brand: "Nike",
//     image:
//       "https://dynamic.zacdn.com/ySNyhEkjTd1RiXHYiUuz2sTaESQ=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/nike-0495-6085913-1.jpg",
//   },
//   {
//     id: 2,
//     slug: "nike-dunk-low-white-3049859",
//     name: "Dunk Low",
//     description: "This is a product",
//     rate: 4.3,
//     price: "4,500.00",
//     discount: 0.05, // 5% discount represented as 0.05 in decimal format
//     brand: "Nike",
//     image:
//       "https://dynamic.zacdn.com/I9bqcSaMMqOydGLIHY9NIts-fsw=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/nike-8173-9589403-1.jpg",
//   },
//   {
//     id: 3,
//     slug: "nike-dunk-low-retro-sneakers-white-2914054",
//     name: "Dunk Low Retro Sneakers",
//     description: "This is a product",
//     rate: 4.3,
//     price: "7,200.00",
//     discount: 0.15, // 15% discount represented as 0.15 in decimal format
//     brand: "Nike",
//     image:
//       "https://dynamic.zacdn.com/AYLp9xQ8PlJTyKYBfvNKyV6KYwI=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/nike-4583-4504192-1.jpg",
//   },
//   {
//     id: 4,
//     slug: "nike-dunk-low-retro-men-s-shoes-white-3195806",
//     name: "Dunk Low Retro Men's Shoes",
//     description: "This is a product",
//     rate: 4.3,
//     price: "3,500.00",
//     discount: 0.1, // 10% discount represented as 0.1 in decimal format
//     brand: "Nike",
//     image:
//       "https://dynamic.zacdn.com/ySNyhEkjTd1RiXHYiUuz2sTaESQ=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/nike-0495-6085913-1.jpg",
//   },
//   {
//     id: 5,
//     slug: "nike-dunk-low-white-3049859",
//     name: "Dunk Low",
//     description: "This is a product",
//     rate: 4.3,
//     price: "4,500.00",
//     discount: 0.05, // 5% discount represented as 0.05 in decimal format
//     brand: "Nike",
//     image:
//       "https://dynamic.zacdn.com/I9bqcSaMMqOydGLIHY9NIts-fsw=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/nike-8173-9589403-1.jpg",
//   },
//   {
//     id: 6,
//     slug: "nike-dunk-low-retro-sneakers-white-2914054",
//     name: "Dunk Low Retro Sneakers",
//     description: "This is a product",
//     rate: 4.3,
//     price: "7,200.00",
//     discount: 0.15, // 15% discount represented as 0.15 in decimal format
//     brand: "Nike",
//     image:
//       "https://dynamic.zacdn.com/AYLp9xQ8PlJTyKYBfvNKyV6KYwI=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/nike-4583-4504192-1.jpg",
//   },
// ];
