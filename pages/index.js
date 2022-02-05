/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/home/Hero";
import ProductList from "../components/home/ProductList";
import Footer from "../components/footer/Footer";
import UpFooter from "../components/footer/UpFooter";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import CarouselStyles from "../components/CarouselStyles";

export default function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="font-sans bg-slate-100">
      <Head>
        <title>fermetures</title>
        <meta name="description" content="fermetures" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* hero section begin */}
      <div className="relative">
        <Hero />
        <Header />
      </div>
      {/* hero section end */}

      <div className="bg-slate-100">
        <div className="pt-10 flex justify-center px-6 pb-8">
          <div className="max-w-7xl w-full">
            <h3 className="text-4xl text-center text-slate-800 font-bold underline-offset-2 underline decoration-wavy decoration-2 decoration-red-600">
              Nos produits
            </h3>
            {/* <ProductList /> */}
            <CarouselStyles />
          </div>
        </div>
      </div>
      <div className="pt-10 text-my_gray uppercase flex justify-center px-6 bg-midnight h-screen demo-carousel">
        asdkjk kasdk
      </div>
      <UpFooter />

      <Footer />
    </div>
  );
}
