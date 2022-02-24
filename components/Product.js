import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import CurrencyFormat from "react-currency-format";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * MAX_RATING - MIN_RATING + 1) + MIN_RATING
  );

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 border border-black shadow-lg">
      <p className="absolute top-2 right-2 text-xs italic text-green-400">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <CurrencyFormat value={price} prefix="€" />
      </div>

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
