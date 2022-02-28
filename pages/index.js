import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductFeed from "../components/ProductFeed";
import Banner from "../components/Banner";

export default function Home({ products, categories }) {
  return (
    <div>
      <Head>
        <title>Project Plant Power</title>
        <meta
          name="description"
          content="An ecommerce store for vegan products"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header categories={categories} />

      <div className="flex">
        <Sidebar categories={categories} />

        <main className="max-w-6xl">
          <Banner />
          <ProductFeed products={products} />
        </main>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  const categories = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());

  return {
    props: {
      products,
      categories,
    },
  };
}
