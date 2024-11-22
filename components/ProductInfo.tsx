"use client";

import { useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";

import useCart from "@/lib/hooks/useCart";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(productInfo.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(productInfo.sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  return (
    <div className="max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-heading3-bold text-white">{productInfo.title}</p>
        <HeartFavorite product={productInfo} />
      </div>

      <div className="flex gap-2">
        <p className="text-base-medium text-white">Category:</p>
        <p className="text-base-bold text-white">{productInfo.category}</p>
      </div>

      <p className="text-heading3-bold text-white">$ {productInfo.price}</p>

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-white">Description:</p>
        <p className="text-small-medium text-white">{productInfo.description}</p>
      </div>

      {productInfo.colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-white">Colors:</p>
          <div className="flex gap-2">
            {productInfo.colors.map((color, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${selectedColor === color ? "bg-black text-white" : "bg-white text-black"}`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </p>
            ))}
          </div>
        </div>
      )}

      {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-white">Sizes:</p>
          <div className="flex gap-2">
            {productInfo.sizes.map((size, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* <div className="flex flex-col gap-2">
        <p className="text-base-medium text-white">Quantity:</p>
        <div className="flex gap-4 items-center">
          <MinusCircle
            className="text-white hover:text-red-500 cursor-pointer"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <p className="text-white text-body-bold">{quantity}</p>
          <PlusCircle
            className="text-white hover:text-green-500 cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div> */}

<button
  className="border border-white text-base font-bold py-2 px-6 shadow-md transition-all duration-150 ease-linear rounded-lg bg-transparent hover:bg-white hover:text-black text-white"
  onClick={() => {
    const phoneNumber = "1234567890"; // Replace with the desired phone number (include country code, e.g., "911234567890" for India)
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  }}
>
  Chat on WhatsApp
</button>


    </div>
  );
};

export default ProductInfo;
