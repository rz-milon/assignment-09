import React from 'react';
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, CubeIcon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { id: 1, name: 'Home', path: '/home', current: true },
  { id: 2, name: 'Topics', path: '/topics', current: false },
  { id: 3, name: 'Quiz', path: '/quiz', current: false },
  { id: 4, name: 'Statistics', path: '/statistics', current: false },
  { id: 5, name: 'Blog', path: '/blog', current: false },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-blue-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-white">
                        <CubeIcon className='w-12 h-12'></CubeIcon>
                    </div>
                    <div className='ml-7'>
                      <h2 className='text-white text-3xl font-bold space-x-3 tracking-wider mr-28'>QUIZ HUB</h2>
                    </div>
                    
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4 text-2xl font-semibold">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-orange-500 text-white'
                                : 'text-white hover:bg-orange-500 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Organize Live Multiplayer Trivia Quiz for Your Event!</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div style={{ backgroundColor: 'blue', height: '500px'
            }}>
              Hello World
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  )
}
