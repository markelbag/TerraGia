import React from "react"
import { useState } from "react"
import { RadioGroup } from "@headlessui/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export const HandlePatties = ({ item }) => {
  const [selectedPatty, setSelectedPatty] = useState(
    item.options.patties.selections && item.options.patties.selections[0]
  )

  console.log(selectedPatty)

  return (
    <div className="text-sm tgGreen">
      {item.options.patties && (
        <RadioGroup value={selectedPatty} onChange={setSelectedPatty}>
          <RadioGroup.Label className="text-xl font-bold text-red-900">
            Select a Patty
          </RadioGroup.Label>

          <div className="flex flex-wrap justify-between w-64 font-extralight text-xl">
            {item.options.patties.selections.map((patty, pattyIdx) => (
              <RadioGroup.Option
                key={patty.id}
                value={patty}
                className={({ checked, active }) =>
                  classNames(
                    checked ? "border-transparent" : "border-transparent",
                    active ? "ring-indigo-500" : "",
                    "relative rounded-lg flex cursor-pointer focus:outline-none"
                  )
                }
              >
                {({ checked, active }) => (
                  <>
                    <div key={pattyIdx} className="relative flex items-start">
                      <div className="w-64 min-w-0 flex-1 text-sm">
                        <label
                          htmlFor={`side-${patty.id}`}
                          className="font-medium text-gray-700 select-none"
                        >
                          {patty.name}
                        </label>
                      </div>
                      <div className="flex items-center h-5">
                        <input
                          id={`side-${patty.id}`}
                          name="plan"
                          type="radio"
                          defaultChecked={patty.id === null}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      )}
    </div>
  )
}

export default HandlePatties
