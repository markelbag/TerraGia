import React from "react"
import { useState } from "react"
import { RadioGroup } from "@headlessui/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export const HandleBreads = ({ item }) => {
    const [selectedBread, setSelectedBread] = useState(
      item.options.breads.selections && item.options.breads.selections[0]
    )
  
    console.log(selectedBread)
  
    return (
      <div className="text-sm tgGreen">
        {item.options.breads && (
          <RadioGroup value={selectedBread} onChange={setSelectedBread}>
            <RadioGroup.Label className="text-xl font-bold text-red-900">
              Select bread
            </RadioGroup.Label>
  
            <div className="flex flex-wrap justify-between w-64 font-extralight text-xl">
              {item.options.breads.selections.map((bread, breadIdx) => (
                <RadioGroup.Option
                  key={bread.id}
                  value={bread}
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
                      <div key={breadIdx} className="relative flex items-start">
                        <div className="w-64 min-w-0 flex-1 text-sm">
                          <label
                            htmlFor={`side-${bread.id}`}
                            className="font-medium text-gray-700 select-none"
                          >
                            {bread.name}
                          </label>
                        </div>
                        <div className="flex items-center h-5">
                          <input
                            id={`side-${bread.id}`}
                            name="plan"
                            type="radio"
                            defaultChecked={bread.id === null}
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

export default HandleBreads;
