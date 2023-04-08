import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'




const PropTypeSelect = () => {
    const types = [
        {type:"Tous"},
        { type: 'Appartement' },
        { type: 'Terrain'},
        { type: 'Villa'},
        {type:'Locale commerciale'},
        {type:'Studio'},
        {type:'Duplex'},
        {type:'Etage de villa'},
        {type:'Triplex'},
        {type:'Maison'},
    
      ]      

      
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      const [selected, setSelected] = useState(types[0])
console.log(selected)
  return (
    <div >
         <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">Type</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button style={{height:"48px", width:'150px'}} className="relative w-full bg-white border border-gray-300  shadow-sm pl-3 pr-10 py-2 text-left cursor-default sm:text-sm">
              <span className="w-full inline-flex truncate">
                <span className="truncate">{selected.type}</span>
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
              <Listbox.Options 
                static id='list'
                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60  py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                {types.map((types) => (
                  <Listbox.Option 
                    key={types.type}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-red-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={types}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex">
                          <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'truncate')}>
                            {types.type}
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

export default PropTypeSelect