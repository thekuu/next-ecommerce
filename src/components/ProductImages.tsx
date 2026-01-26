"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80", // white t-shirt model
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/7679729/pexels-photo-7679729.jpeg?auto=compress&cs=tinysrgb&w=800", // hoodie
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg?auto=compress&cs=tinysrgb&w=800", // beige coat
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80", // dark sweatshirt
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt={`Image ${index + 1}`}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className={`w-1/2 h-32 relative cursor-pointer border-2 rounded-md ${
              i === index ? "border-blue-500" : "border-transparent"
            }`}
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt={`Thumbnail ${i + 1}`}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
