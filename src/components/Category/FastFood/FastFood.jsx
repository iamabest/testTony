import React from "react";
import HomeLayout from "../../HomeLayout/HomeLayout";
import { Link } from "react-router-dom";

function FastFood() {
  return (
    <>
      <HomeLayout>
        <div>
          <div className="mx-auto container px-6 xl:px-0 py-12">
            {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
            <div className="flex flex-col">
              <div className="flex flex-col justify-center">
                <div className="relative">
                  <img
                    className="hidden sm:block w-[100%] h-[500px]"
                    src="https://nhahangso.cdn.vccloud.vn/wp-content/uploads/2022/11/Fast-food-la-gi.webp"
                    alt=""
                  />
                  <img
                    className="sm:hidden w-[50%]"
                    src="https://nhahangso.cdn.vccloud.vn/wp-content/uploads/2022/11/Fast-food-la-gi.webp"
                    alt=""
                  />
                  <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                    <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">
                      Fast Food
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
                <Link to="/ProductHamburger">
                  <div className="group group-hover:bg-opacity-70 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
                    <img
                      className="group-hover:opacity-60 transition duration-500"
                      src="./img/hamburger.png"
                      alt="Hamburger"
                    />
                    <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                      <div>
                        <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">
                          Hamburger
                        </p>
                      </div>
                      <div>
                        <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white" />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/ProductHotDog">
                  <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
                    <img
                      className="group-hover:opacity-60 transition duration-500"
                      src="./img/hotdog.png"
                      alt="Hot dog"
                    />
                    <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                      <div>
                        <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">
                          Hot Dog
                        </p>
                      </div>
                      <div>
                        <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white" />
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="/ProductSoftDrink">
                  <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
                    <img
                      className="group-hover:opacity-60 transition duration-500"
                      src="./img/coca.png"
                      alt="Coca cola"
                    />
                    <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                      <div>
                        <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">
                          Soft Drink
                        </p>
                      </div>
                      <div>
                        <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white" />
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
                  <img
                    className="group-hover:opacity-60 transition duration-500"
                    src="./img/FrenchFries.png"
                    alt="french Fries"
                  />
                  <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                    <div>
                      <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">
                        French Fries
                      </p>
                    </div>
                    <div>
                      <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-6">
                    <p className="text-base leading-4 pb-0.5 text-gray-600 dark:text-white border-b-2 border-gray-600">
                      New
                    </p>
                  </div>
                </div>
                <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
                  <img
                    className="group-hover:opacity-60 transition duration-500"
                    src="./img/pizza.png"
                    alt="pizza"
                  />
                  <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                    <div>
                      <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">
                        Pizza
                      </p>
                    </div>
                    <div>
                      <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white" />
                    </div>
                  </div>
                </div>
                <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
                  <img
                    className="group-hover:opacity-60 transition duration-500"
                    src="./img/tacos.png"
                    alt="Tacos"
                  />
                  <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                    <div>
                      <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">
                        Tacos
                      </p>
                    </div>
                    <div>
                      <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-end mt-12" >
                <div className="flex flex-row items-center justify-center space-x-8">
                  <button className="text-base leading-none text-gray-800 dark:text-white border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                    <p>1</p>
                  </button>
                  <button className="text-base leading-none text-gray-800 dark:text-white border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                    <p>2</p>
                  </button>
                  <button className="text-base leading-none text-gray-800 dark:text-white border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                    <p>3</p>
                  </button>
                  <button className="flex justify-center items-center">
                    <svg
                      className="dark:text-white"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}

export default FastFood;
