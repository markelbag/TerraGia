import React from "react"
import { useState } from "react"
import { RadioGroup } from "@headlessui/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export const HandleMeats = ({ item }) => {
  const [selectedMeat, setSelectedMeat] = useState(
    item.options.meats.selections && item.options.meats.selections[0]
  )

  console.log(selectedMeat)

  return (
    <div className="text-sm tgGreen">
      {item.options.meats && (
        <RadioGroup value={selectedMeat} onChange={setSelectedMeat}>
          <RadioGroup.Label className="text-xl font-bold text-red-900">
            Select meat
          </RadioGroup.Label>

          <div className="flex flex-wrap justify-between w-64 font-extralight text-xl">
            {item.options.meats.selections.map((meat, meatIdx) => (
              <RadioGroup.Option
                key={meat.id}
                value={meat}
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
                    <div key={meatIdx} className="relative flex items-start">
                      <div className="w-64 min-w-0 flex-1 text-sm">
                        <label
                          htmlFor={`side-${meat.id}`}
                          className="font-medium text-gray-700 select-none"
                        >
                          {meat.name}
                        </label>
                      </div>
                      <div className="flex items-center h-5">
                        <input
                          id={`side-${meat.id}`}
                          name="plan"
                          type="radio"
                          defaultChecked={meat.id === null}
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
export default HandleMeats
