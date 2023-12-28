import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Carousel from '../Carousel/Carousel'

function Shop() {
  return (
    <>
    <Header/>
    <Carousel/>
    <div>
       <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {/* image - start */}
            <Link
              to="/"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://media.viez.vn/prod/2022/4/8/2_10_c539345770.jpg"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Dirty Skewers
              </span>
            </Link>
            {/* image - end */}
            {/* image - start */}
            <Link
              to="/"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://themissouritimes.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-14-at-4.35.49-PM.png"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Drinks
              </span>
            </Link>
            {/* image - end */}
            {/* image - start */}
            <Link
              to="/"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://www.newviet.net/wp-content/uploads/2022/05/image3.png.webp"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Fast Food
              </span>
            </Link>
            {/* image - end */}
            {/* image - start */}
            <Link
              to="/"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://blog-assets.lightspeedhq.com/img/2021/11/73461940-44_well-drinks_01-hero.jpg"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Fruit Drinks
              </span>
            </Link>
            {/* image - end */}
          </div>
        </div>
        </div>
    </div>
    </>
    
  )
}

export default Shop
