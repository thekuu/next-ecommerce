"use client";

import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Casual White T-Shirt",
    price: "400 ETB",
    image1:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80", // white tee
    image2:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80", // gray tee
  },
  {
    id: 2,
    name: "Slim Fit Black Tee",
    price: "350 ETB",
    image1:
      "https://images.unsplash.com/photo-1542060748-10c28b62716e?auto=format&fit=crop&w=800&q=80", // black tee
    image2:
      "https://images.unsplash.com/photo-1535008652995-e95986556e32?auto=format&fit=crop&w=800&q=80", // red tee
  },
  {
    id: 3,
    name: "Denim Jacket Combo",
    price: "1,200 ETB",
    image1:
      "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg?auto=compress&cs=tinysrgb&w=800", // light denim jacket
    image2:
      "https://images.pexels.com/photos/7697324/pexels-photo-7697324.jpeg?auto=compress&cs=tinysrgb&w=800", // darker denim jacket
  },
  {
    id: 4,
    name: "Urban Hoodie Pack",
    price: "950 ETB",
    image1:
      "https://images.pexels.com/photos/7679729/pexels-photo-7679729.jpeg?auto=compress&cs=tinysrgb&w=800", // black hoodie
    image2:
      "https://images.pexels.com/photos/6858212/pexels-photo-6858212.jpeg?auto=compress&cs=tinysrgb&w=800", // light gray hoodie
  },
  // Add more products as needed...
];

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products.map((product) => (
        <Link
          key={product.id}
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={product.image1}
              alt={product.name}
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
            />
            <Image
              src={product.image2}
              alt={product.name}
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">{product.price}</span>
          </div>
          <div className="text-sm text-gray-500">My description</div>
          <button className="rounded-2xl ring ring-prime text-prime w-max py-2 px-4 text-xs hover:bg-prime hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
