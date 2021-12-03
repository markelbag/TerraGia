import React from "react"
import { useState } from "react"
import { RadioGroup } from "@headlessui/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export const HandleBlends = ({ item }) => {
    const [selectedBlend, setSelectedBlend] = useState(
      item.options.blends.selections && item.options.blends.selections[0]
    )
  
    console.log(selectedBlend)
  
    return (
      <div className="text-sm tgGreen">
        {item.options.blends && (
          <RadioGroup value={selectedBlend} onChange={setSelectedBlend}>
            <RadioGroup.Label className="text-xl font-bold text-red-900">
              Select a Blend
            </RadioGroup.Label>
  
            <div className="flex flex-wrap justify-between w-64 font-extralight text-xl">
              {item.options.blends.selections.map((blend, blendIdx) => (
                <RadioGroup.Option
                  key={blend.id}
                  value={blend}
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
                      <div key={blendIdx} className="relative flex items-start">
                        <div className="w-64 min-w-0 flex-1 text-sm">
                          <label
                            htmlFor={`side-${blend.id}`}
                            className="font-medium text-gray-700 select-none"
                          >
                            {blend.name}
                          </label>
                        </div>
                        <div className="flex items-center h-5">
                          <input
                            id={`side-${blend.id}`}
                            name="plan"
                            type="radio"
                            defaultChecked={blend.id === null}
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

export default HandleBlends;
