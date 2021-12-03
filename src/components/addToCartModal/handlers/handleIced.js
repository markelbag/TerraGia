import React from "react"
import { useState } from "react"
import { RadioGroup } from "@headlessui/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export const HandleIced = ({ item }) => {
    const [selectedIce, setSelectedIce] = useState(
      item.options.iced.selections && item.options.iced.selections[0]
    )
  
    console.log(selectedIce)
  
    return (
      <div className="text-sm tgGreen">
        {item.options.iced && (
          <RadioGroup value={selectedIce} onChange={setSelectedIce}>
            <RadioGroup.Label className="text-xl font-bold text-red-900">
              Hot or Iced
            </RadioGroup.Label>
  
            <div className="flex flex-wrap justify-between w-64 font-extralight text-xl">
              {item.options.iced.selections.map((ice, iceIdx) => (
                <RadioGroup.Option
                  key={ice.id}
                  value={ice}
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
                      <div key={iceIdx} className="relative flex items-start">
                        <div className="w-64 min-w-0 flex-1 text-sm">
                          <label
                            htmlFor={`side-${ice.id}`}
                            className="font-medium text-gray-700 select-none"
                          >
                            {ice.name}
                          </label>
                        </div>
                        <div className="flex items-center h-5">
                          <input
                            id={`side-${ice.id}`}
                            name="plan"
                            type="radio"
                            defaultChecked={ice.id === null}
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

export default HandleIced;
