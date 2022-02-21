import Link from "next/link";
import React, { Component } from "react";
const Test = (id,name,url,title) => (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 ">
    <div className="mb-10 group wow fadeInUp" data-wow-delay=".1s">
      <div className="rounded overflow-hidden mb-8">
        <a href="/productDetails" className="block hover:cursor-pointer">
          <img
            src={url}
            alt={title}
            className="w-full transition group-hover:scale-125 group-hover:rotate-6"
          />
        </a>
      </div>
      <div className="hover:cursor-pointer">
        <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5 bg-blue-600">
          Dec 22, 2023
        </span>
        <h3>
          <Link
            href={`/productDetails/`}
            // as={`/productDetails/${id}`}
            className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
          >
            {name}
          </Link>
        </h3>
        <p className="text-base text-body-color">
          {/* Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. */}
        </p>
      </div>
    </div>
  </div>
)
