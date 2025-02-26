import { Popover,   
    PopoverButton,
    PopoverGroup,
    PopoverPanel,  } from '@headlessui/react'

import {
    ArrowPathIcon,
   
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
   
  } from '@heroicons/react/24/outline'
  import { ChevronDownIcon, } from '@heroicons/react/20/solid'
  
import React from 'react'


const hero = () =>
    
    
    {const products = [
    { name: 'Abuja (FCT)', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Lagos State ', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Kogi State', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Osun State', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Nassarawa State', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ]

  return (
    <div>

<section className="bg-[#204f0f]">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16  lg:px-12">
   
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">FIND YOUR SECRETARIAT NOW</h1>

        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-2">
        <PopoverGroup className=" flex flex-col items-center justify-center lg:flex-row lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1  text-sm/6 font-semibold text-white">
              Select State
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full right-1 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition
               data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
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
          
            </PopoverPanel>
          </Popover>

        
        </PopoverGroup>
          
        </div>
 
    </div>
</section>
      
    </div>
  )
}

export default hero
