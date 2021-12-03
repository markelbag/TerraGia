import React from "react"
import { useState } from "react"
import { RadioGroup } from "@headlessui/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export const HandleProteins = ({ item, selectedProtein, setSelectedProtein }) => {
  // const [selectedProtein, setSelectedProtein] = useState(
  //   item.options.proteins.selections && item.options.proteins.selections[0]
  // )

  // console.log(selectedProtein)

  return (
    <div className="text-sm tgGreen">
      {item.options.proteins && (
        <RadioGroup value={selectedProtein} onChange={setSelectedProtein}>
          <RadioGroup.Label className="text-xl font-bold text-red-900">
            Select a Protein
          </RadioGroup.Label>

          <div className="flex flex-wrap justify-between w-64 font-extralight text-xl">
            {item.options.proteins.selections.map((protein, proteinIdx) => (
              <RadioGroup.Option
                key={protein.id}
                value={protein}
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
                    <div key={proteinIdx} className="relative flex items-start">
                      <div className="w-64 min-w-0 flex-1 text-sm">
                        <label
                          htmlFor={`side-${protein.id}`}
                          className="font-medium text-gray-700 select-none"
                        >
                          {protein.name}
                        </label>
                      </div>
                      <div className="flex items-center h-5">
                        <input
                          id={`side-${protein.id}`}
                          name="plan"
                          type="checkbox"
                          defaultChecked={protein.id === null}
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
export default HandleProteins
