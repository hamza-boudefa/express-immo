import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'




const SubZone = ({selectedZone}) => {
    const locations =selectedZone    
console.log(locations)
      
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      const [selected, setSelected] = useState(locations[0])
  return (
    <div>
         <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">Quartiers</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button style={{height:"48px",width:'150px'}} className="relative w-full bg-white border border-gray-300  shadow-sm pl-3 pr-10 py-2 text-left cursor-default sm:text-sm">
              <span className="w-full inline-flex truncate">
                <span className="truncate">{selected.location}</span>
                {/* <span className="ml-2 truncate text-gray-500">{selected.username}</span> */}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition 
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options id='list'
                static
                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60  py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                {locations.map((locations) => (
                  <Listbox.Option  
                    key={locations.location}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-red-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={locations}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex">
                          <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'truncate')}>
                            {locations.location}
                          </span>
                   
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
    </div>
  )
}

export default SubZone