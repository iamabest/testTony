import React from "react";
import { Link } from "react-router-dom";

function HomeAbout() {
  return (
    <div>
      
      <div className="bg-gray-50">
        <div className="lg:px-15 md:px-5 px-7 py-5 mx-auto max-w-screen-2xl mt-9">
        <div className="lg:flex items-center justify-between ">
          <div className="lg:w-1/3">
            <h1 className="text-4xl font-bold leading-9 text-gray-800 dark:text-white">
              Introducing the Restaurant
            </h1>
            <p className="text-base leading-6 mt-4 text-gray-600 dark:text-gray-100">
              Get inspired by our curated selection of luxiwood interiors. We
              hope get inspired to have luxiwood interior yourself. You’ll find
              tips here where you can buy a lot of cool furniture.
            </p>
            <button
              role="button"
              aria-label="view catalogue"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 dark:text-white flex items-center hover:underline"
            >
              View More
              <svg
                className="ml-2 mt-1 dark:text-white"
                width={12}
                height={8}
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33325 4H10.6666"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 6.66667L10.6667 4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 1.33398L10.6667 4.00065"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="lg:w-7/12 lg:mt-0 mt-8 ml-[90px]">
            <div className="w-full h-full bg-red-200">
              <img
                src="https://toohotel.com/wp-content/uploads/2022/09/TOO_restaurant_Panoramique_vue_Paris_Seine_Tour_Eiffel_2.jpg"
                alt="apartment design"
                className="w-full sm:block hidden"
              />
              <img
                src="https://media.timeout.com/images/106047598/750/422/image.jpg"
                alt="apartment design"
                className="sm:hidden block w-full"
              />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
              <img
                src="https://ideat.fr/wp-content/uploads/sites/3/2022/11/too-restaurant-ara-tsrack.jpg"
                className="w-full"
                alt="kitchen"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/640px-Restaurant_N%C3%A4sinneula.jpg"
                className="w-full"
                alt="sitting room"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default HomeAbout;
