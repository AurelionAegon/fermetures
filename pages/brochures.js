import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";
import UpFooter from "../components/footer/UpFooter";
import CarouselStyles from "../components/CarouselStyles";
import Alert from "../components/conseils/Alert";
export default class brochures extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <div className=" mt-32 px-10 py-6  mx-4">
          <Alert
            title="BROCHURES"
            description="Retrouvez ici les brochures téléchargeables de nos gammes de produits.
            Plus écolo que le papier !"
          />
        </div>

        <CarouselStyles />
        {/* <div classNameName="pt-40 px-10 py-6 mx-4"> */}
        <section className="lg:pt-[120px] pb-10 lg:pb-20 pt-40 px-10 py-6 mx-4">
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="mb-10 group wow fadeInUp" data-wow-delay=".1s">
                  <div className="rounded overflow-hidden mb-8">
                    <a href="blog-details.html" className="block">
                      <img
                        src="assets/images/blog/blog-01.jpg"
                        alt="image"
                        className="w-full transition group-hover:scale-125 group-hover:rotate-6"
                      />
                    </a>
                  </div>
                  <div>
                    <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5 bg-blue-600">
                      Dec 22, 2023
                    </span>
                    <h3>
                      <a
                        href="blog-details.html"
                        className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
                      >
                        Meet AutoManage, the best AI management tools
                      </a>
                    </h3>
                    <p className="text-base text-body-color">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="mb-10 group wow fadeInUp" data-wow-delay=".15s">
                  <div className="rounded overflow-hidden mb-8">
                    <a href="blog-details.html" className="block">
                      <img
                        src="assets/images/blog/blog-02.jpg"
                        alt="image"
                        className="w-full transition group-hover:scale-125 group-hover:rotate-6"
                      />
                    </a>
                  </div>
                  <div>
                    <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5 bg-blue-600">
                      Mar 15, 2023
                    </span>
                    <h3>
                      <a
                        href="blog-details.html"
                        className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
                      >
                        How to earn more money as a wellness coach
                      </a>
                    </h3>
                    <p className="text-base text-body-color">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="mb-10 group wow fadeInUp" data-wow-delay=".2s">
                  <div className="rounded overflow-hidden mb-8">
                    <a href="blog-details.html" className="block">
                      <img
                        src="assets/images/blog/blog-03.jpg"
                        alt="image"
                        className="w-full transition group-hover:scale-125 group-hover:rotate-6"
                      />
                    </a>
                  </div>
                  <div>
                    <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5 bg-blue-600">
                      Jan 05, 2023
                    </span>
                    <h3>
                      <a
                        href="blog-details.html"
                        className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
                      >
                        The no-fuss guide to upselling and cross selling
                      </a>
                    </h3>
                    <p className="text-base text-body-color">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="mb-10 group wow fadeInUp" data-wow-delay=".1s">
                  <div className="rounded overflow-hidden mb-8">
                    <a href="blog-details.html" className="block">
                      <img
                        src="assets/images/blog/blog-02.jpg"
                        alt="image"
                        className="w-full transition group-hover:scale-125 group-hover:rotate-6"
                      />
                    </a>
                  </div>
                  <div>
                    <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5 bg-blue-600">
                      Mar 15, 2023
                    </span>
                    <h3>
                      <a
                        href="blog-details.html"
                        className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
                      >
                        How to earn more money as a wellness coach
                      </a>
                    </h3>
                    <p className="text-base text-body-color">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="mb-10 group wow fadeInUp" data-wow-delay=".15s">
                  <div className="rounded overflow-hidden mb-8">
                    <a href="blog-details.html" className="block">
                      <img
                        src="assets/images/blog/blog-03.jpg"
                        alt="image"
                        className="w-full transition group-hover:scale-125 group-hover:rotate-6"
                      />
                    </a>
                  </div>
                  <div>
                    <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5 bg-blue-600">
                      Jan 05, 2023
                    </span>
                    <h3>
                      <a
                        href="blog-details.html"
                        className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
                      >
                        The no-fuss guide to upselling and cross selling
                      </a>
                    </h3>
                    <p className="text-base text-body-color">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="mb-10 group wow fadeInUp" data-wow-delay=".2s">
                  <div className="rounded overflow-hidden mb-8">
                    <a href="blog-details.html" className="block">
                      <img
                        src="assets/images/blog/blog-01.jpg"
                        alt="image"
                        className="w-full transition group-hover:scale-125 group-hover:rotate-6"
                      />
                    </a>
                  </div>
                  <div>
                    <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5 bg-blue-600">
                      Dec 22, 2023
                    </span>
                    <h3>
                      <a
                        href="blog-details.html"
                        className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
                      >
                        Meet AutoManage, the best AI management tools
                      </a>
                    </h3>
                    <p className="text-base text-body-color">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="mb-10 group wow fadeInUp" data-wow-delay=".1s">
                  <div className="rounded overflow-hidden mb-8">
                    <a href="blog-details.html" className="block">
                      <img
                        src="assets/images/blog/blog-01.jpg"
                        alt="image"
                        className="w-full transition group-hover:scale-125 group-hover:rotate-6"
                      />
                    </a>
                  </div>
                  <div>
                    <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5 bg-blue-600">
                      Dec 22, 2023
                    </span>
                    <h3>
                      <a
                        href="blog-details.html"
                        className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
                      >
                        Meet AutoManage, the best AI management tools
                      </a>
                    </h3>
                    <p className="text-base text-body-color">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="mb-10 group wow fadeInUp" data-wow-delay=".15s">
                  <div className="rounded overflow-hidden mb-8">
                    <a href="blog-details.html" className="block">
                      <img
                        src="assets/images/blog/blog-02.jpg"
                        alt="image"
                        className="w-full transition group-hover:scale-125 group-hover:rotate-6"
                      />
                    </a>
                  </div>
                  <div>
                    <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5 bg-blue-600">
                      Mar 15, 2023
                    </span>
                    <h3>
                      <a
                        href="blog-details.html"
                        className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
                      >
                        How to earn more money as a wellness coach
                      </a>
                    </h3>
                    <p className="text-base text-body-color">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="mb-10 group wow fadeInUp" data-wow-delay=".2s">
                  <div className="rounded overflow-hidden mb-8">
                    <a href="blog-details.html" className="block">
                      <img
                        src="assets/images/blog/blog-03.jpg"
                        alt="image"
                        className="w-full transition group-hover:scale-125 group-hover:rotate-6"
                      />
                    </a>
                  </div>
                  <div>
                    <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5 bg-blue-600">
                      Jan 05, 2023
                    </span>
                    <h3>
                      <a
                        href="blog-details.html"
                        className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
                      >
                        The no-fuss guide to upselling and cross selling
                      </a>
                    </h3>
                    <p className="text-base text-body-color">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </div> */}
        <UpFooter />
        <Footer />
      </div>
    );
  }
}
