import React from "react"
// import { useState } from "react"
import { RadioGroup } from "@headlessui/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export const HandleFlavors = ({ item, selectedFlavor, setSelectedFlavor }) => {
  // const [selectedFlavor, setSelectedFlavor] = useState(
  //   item.options.flavors.selections && item.options.flavors.selections[0]
  // )

  // console.log(selectedFlavor)

  return (
    <div className="text-sm tgGreen">
      {item.options.flavors && (
        <RadioGroup value={selectedFlavor} onChange={setSelectedFlavor}>
          <RadioGroup.Label className="text-xl font-bold text-red-900">
            Select a Flavor
          </RadioGroup.Label>

          <div className="flex flex-wrap justify-between w-64 text-xl font-extralight">
            {item.options.flavors.selections.map((flavor, flavorIdx) => (
              <RadioGroup.Option
                key={flavor.id}
                value={flavor}
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
                    <div key={flavorIdx} className="relative flex items-start">
                      <div className="flex-1 w-64 min-w-0 text-sm">
                        <label
                          htmlFor={`side-${flavor.id}`}
                          className="font-medium text-gray-700 select-none"
                        >
                          {flavor.name}
                        </label>
                      </div>
                      <div className="flex items-center h-5">
                        <input
                          id={`side-${flavor.id}`}
                          name="plan"
                          type="checkbox"
                          defaultChecked={flavor.id === null}
                          className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
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

export default HandleFlavors
