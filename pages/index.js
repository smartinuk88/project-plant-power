import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductFeed from "../components/ProductFeed";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className>
      <Head>
        <title>Project Plant Power</title>
        <meta
          name="description"
          content="An ecommerce store for vegan products"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex">
        <Sidebar />

        <main className="max-w-6xl">
          <Banner />
        </main>
      </div>
    </div>
  );
}
