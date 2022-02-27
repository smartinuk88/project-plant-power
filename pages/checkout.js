import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { selectItems } from "../slices/basketSlice";

function Checkout() {
  const items = useSelector(selectItems);

  return (
    <div>
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="lg:flex max-w-6xl">
          <div className="flex-grow m-5 shadow-sm">
            <Banner />
            <div className="flex flex-col p-5 space-y-10 bg-white">
              <h1 className="text-3xl border-b pb-4">
                {items.length === 0
                  ? "Your Amazon Basket is empty"
                  : "Your Shopping Basket"}
              </h1>

              {items.map(item)}
            </div>
          </div>
          <div></div>
        </main>
      </div>
    </div>
  );
}

export default Checkout;
