import Logo from "../assets/PPP-Logo-BLACK.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function Banner() {
  return (
    <div className="border border-black rounded mx-5 my-10 md:col-span-full text-left">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="flex justify-between items-center h-full bg-green-500 p-5">
          <div className="space-y-5 flex-1 p-5 font-serif max-w-3xl">
            <h1 className="text-6xl">
              Your one stop shop for all things vegan, at affordable prices.
            </h1>
            <h2>
              Millions have already shown their love for animals by buying our
              products.
            </h2>
          </div>

          <div className="h-10 w-20 self-end">
            <Image
              loading="lazy"
              className="hidden  md:inline-flex h-full object-contain"
              src={Logo}
              alt="Project Plant Power Logo"
            />
          </div>
        </div>

        <div className="flex justify-between items-center h-full bg-green-500 p-5">
          <div className="space-y-5 flex-1 p-5 font-serif max-w-3xl">
            <h1 className="text-6xl">
              Your one stop shop for all things vegan, at affordable prices.
            </h1>
            <h2>
              Millions have already shown their love for animals by buying our
              products.
            </h2>
          </div>

          <div className="h-10 w-20 self-end">
            <Image
              loading="lazy"
              className="hidden  md:inline-flex h-full object-contain"
              src={Logo}
              alt="Project Plant Power Logo"
            />
          </div>
        </div>

        <div className="flex justify-between items-center h-full bg-green-500 p-5">
          <div className="space-y-5 flex-1 p-5 font-serif max-w-3xl">
            <h1 className="text-6xl">
              Your one stop shop for all things vegan, at affordable prices.
            </h1>
            <h2>
              Millions have already shown their love for animals by buying our
              products.
            </h2>
          </div>

          <div className="h-10 w-20 self-end">
            <Image
              loading="lazy"
              className="hidden  md:inline-flex h-full object-contain"
              src={Logo}
              alt="Project Plant Power Logo"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
