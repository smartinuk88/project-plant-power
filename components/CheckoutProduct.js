import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
    };

    // Push item into redux store
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    // Remove item from redux store
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <CurrencyFormat value={price} prefix="€" />
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <p>Quantity</p>
        <button onClick={addItemToBasket} className="button">
          +
        </button>
        <button onClick={removeItemFromBasket} className="button">
          -
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
