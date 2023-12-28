import { Link, NavLink } from "react-router-dom";

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import PhoneIcon from '@mui/icons-material/Phone';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import IcecreamIcon from '@mui/icons-material/Icecream';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const products = [
  { name: 'Fast Food', description: '', href: '/FastFood', icon: FastfoodIcon },
  { name: 'Local Bar', description: '', href: '#', icon: LocalBarIcon },
  { name: 'Ice Cream', description: '', href: '#', icon: IcecreamIcon },
  { name: 'Restaurant', description: '', href: '#', icon: RestaurantIcon },
  { name: 'Kebab Dining', description: '', href: '#', icon: KebabDiningIcon },
]
const callsToAction = [
  { name: 'Watch Introduction', href: '#', icon: PlayCircleOutlineIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50">
      <header className="shadow-md py-1 px-4 sm:px-10 bg-gray-100 font-[sans-serif] ">
        <div className="flex flex-wrap items-center justify-between gap-5 relative  ">
          <div >
             <NavLink to="/"className="flex items-center">
            <img className="w-24 " src="./img/logoshop3.png" alt="logo" />
            <p className="text-[20px] font-serif font-semibold"><i>Kitsune</i><span className="font-semibold font-serif text-[25px] text-cyan-400">Shop</span></p>
          </NavLink>
          </div>
        
          <div className="flex lg:order-1 max-sm:ml-auto">
             <NavLink to='/login'>
            <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-cyan-200 bg-cyan-500 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
              Login
            </button>
         </NavLink>
          <NavLink to='/register'>
             <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-cyan-200 bg-cyan-700 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] ml-3">
              Sign up
            </button>
          </NavLink>
           
            <button id="toggle" className="lg:hidden ml-7">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <ul
            id="collapseMenu"
            className="lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full"
          >
            <li className="max-lg:border-b max-lg:bg-[#007bff] max-lg:py-2 px-3 max-lg:rounded lg:hover:text-[#007bff] text-[#007bff] max-lg:text-white block font-semibold text-[15px]">
              <NavLink
               to='/'
                className={({ isActive }) =>
                isActive
                  ? "font-semibold text-cyan-600 border-b-2 border-cyan-600"
                  : "font-semibold text-gray-500 hover:text-blue-600"
              }
              >
                Home
              </NavLink>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded lg:hover:text-cyan-400 text-gray-500 block font-semibold text-[15px]">
              <NavLink
                to='/shop'
                className={({ isActive }) =>
                isActive
                  ? "font-semibold text-cyan-600 border-b-2 border-cyan-600"
                  : "font-semibold text-gray-500 hover:text-blue-600"
              }
              >
                Shop
              </NavLink>
            </li>
            
              {/* đây */}
              <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FastfoodIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-500">
            Category
              <KeyboardArrowDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-cyan-500" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
    
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IcecreamIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Category
                        <RestaurantIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
          
          </div>
            </div>
        </Dialog.Panel>
      </Dialog>
              {/* vs đây */}
            
            <li className="max-lg:border-b max-lg:py-2 px-1 max-lg:rounded">
              <Link
                to='/'
                className="lg:hover:text-cyan-400 text-gray-500 block font-semibold text-[15px]"
              >
                Blog
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-2 max-lg:rounded">
              <Link
                to='/'
                className="lg:hover:text-cyan-400 text-gray-500 block font-semibold text-[15px]"
              >
                Purchase History
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-2 max-lg:rounded">
              <Link
                to='/'
                className="lg:hover:text-cyan-400 text-gray-500 block font-semibold text-[15px]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
