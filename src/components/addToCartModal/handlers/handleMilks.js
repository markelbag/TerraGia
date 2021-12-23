import React from "react"
//import { useState } from "react"
import { RadioGroup } from "@headlessui/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const HandleMilks = ({ item, selectedMilk, setSelectedMilk }) => {
  // const [selectedMilk, setSelectedMilk] = useState(
  //   item.options.milks.selections && item.options.milks.selections[0]
  // )

  // console.log(selectedMilk)

  return (
    <div className="text-sm tgGreen">
      {item.options.milks && (
        <RadioGroup value={selectedMilk} onChange={setSelectedMilk}>
          <RadioGroup.Label className="text-xl font-bold text-red-900">
            Select a Milk
          </RadioGroup.Label>

          <div className="flex flex-wrap justify-between w-64 text-xl font-extralight">
            {item.options.milks.selections.map((milk, milkIdx) => (
              <RadioGroup.Option
                key={milk.id}
                value={milk}
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
                    <div key={milkIdx} className="relative flex items-start">
                      <div className="flex-1 w-64 min-w-0 text-sm">
                        <label
                          htmlFor={`side-${milk.id}`}
                          className="font-medium text-gray-700 select-none"
                        >
                          {milk.name}
                        </label>
                      </div>
                      <div className="flex items-center h-5">
                        <input
                          id={`side-${milk.id}`}
                          name="plan"
                          type="radio"
                          defaultChecked={milk.id === null}
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

export default HandleMilks
