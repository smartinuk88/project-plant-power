import Image from "next/image";
import Logo from "../assets/PPP-Logo.png";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header({ categories }) {
  const { data: session, status } = useSession();
  const items = useSelector(selectItems);

  return (
    <header className=" bg-white sticky z-50 top-0 left-0 p-3">
      <div className="flex h-10 justify-between items-center ">
        <div className="flex items-center flex-[0.5] justify-between gap-x-10">
          <Link href="/">
            <div className="h-10">
              <Image
                className="object-contain cursor-pointer"
                src={Logo}
                width={200}
                height={50}
                alt="Project Plant Power logo"
              />
            </div>
          </Link>

          <div className="hidden sm:flex border-2 h-8 rounded  border-black justify-end w-full">
            <input
              className="flex-grow p-1 focus:outline-none"
              type="text"
              placeholder="Search..."
            />
            <select
              className="px-2 border-x-2 outline-none border-black"
              name="categories"
              id="categories"
            >
              <option value="allCategories">All categories</option>
              {/* {categories.map((category) => (
                <option value={category}>{category}</option>
              ))} */}
            </select>
            <div className="flex w-8 bg-green-400 transition-all hover:bg-green-500 cursor-pointer items-center justify-center">
              <SearchIcon className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="flex space-x-5 h-full items-center">
          <Link href="/checkout">
            <div className="w-10 relative cursor-pointer h-full flex items-center justify-center">
              <span className="absolute border border-black top-0 right-0 h-4 w-4 bg-green-500 text-center text-xs rounded-full font-bold">
                {items.length}
              </span>
              <ShoppingCartIcon className="h-10 w-10" />
            </div>
          </Link>

          <div
            onClick={!session ? signIn : signOut}
            className={
              status === "authenticated"
                ? "rounded-full h-full cursor-pointer border-2 border-black"
                : "border-2 cursor-pointer hover:bg-green-500 transition-all h-full px-5 font-semibold rounded flex items-center justify-center border-black bg-green-400"
            }
          >
            {status === "authenticated" ? (
              <img
                className="rounded-full h-full object-contain hover:animate-spin"
                src={session.user.image}
              />
            ) : (
              "Sign In"
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
