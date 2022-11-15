import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline/index';

export default function Header() {
  return (
    <Popover className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#herosection">
              <span className="sr-only">Astraus</span>
              <img className="h-14 w-auto sm:h-16" src={'/astraus_logo.png'} alt="Logo" />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-800">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a href="#services" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Services
            </a>
            <a href="#works" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Works
            </a>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="#contact"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-zinc-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-zinc-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute z-20 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-12 w-auto" src="/astraus_logo.png" alt="Your Company" />
                </div>
                <Popover.Button>
                  <div
                    className="fixed inset-0 bg-zinc-600 bg-opacity-80 overflow-y-auto h-screen w-screen z-[-1]"
                    id="my-modal"
                  />
                </Popover.Button>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-800">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full items-center space-y-6 py-6 px-5">
              <div className="flex flex-col gap-5">
                <a href="#services" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Services
                </a>

                <a href="#works" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Works
                </a>
              </div>
              <a
                href="#contact"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-zinc-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-zinc-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
