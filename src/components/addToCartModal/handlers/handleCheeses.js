import React from "react"
import { useState } from "react"
import { RadioGroup } from "@headlessui/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export const HandleCheeses = ({ item }) => {
  const [selectedCheese, setSelectedCheese] = useState(
    item.options.cheese.selections && item.options.cheese.selections[0]
  )

  console.log(selectedCheese)

  return (
    <div className="text-sm tgGreen">
      {item.options.cheese && (
        <RadioGroup value={selectedCheese} onChange={setSelectedCheese}>
          <RadioGroup.Label className="text-xl font-bold text-red-900">
            Select cheese
          </RadioGroup.Label>

          <div className="flex flex-wrap justify-between w-64 font-extralight text-xl">
            {item.options.cheese.selections.map((cheese, cheeseIdx) => (
              <RadioGroup.Option
                key={cheese.id}
                value={cheese}
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
                    <div key={cheeseIdx} className="relative flex items-start">
                      <div className="w-64 min-w-0 flex-1 text-sm">
                        <label
                          htmlFor={`side-${cheese.id}`}
                          className="font-medium text-gray-700 select-none"
                        >
                          {cheese.name}
                        </label>
                      </div>
                      <div className="flex items-center h-5">
                        <input
                          id={`side-${cheese.id}`}
                          name="plan"
                          type="radio"
                          defaultChecked={cheese.id === null}
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
export default HandleCheeses
