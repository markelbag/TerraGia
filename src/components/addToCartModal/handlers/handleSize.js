import React from "react"
//import { useState } from "react"
import { RadioGroup } from "@headlessui/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const HandleSizes = ({ item, selectedSize, setSelectedSize }) => {
  // const [selectedSize, setSelectedSize] = useState(
  //   item.options.sizes.selections && item.options.sizes.selections[0]
  // )

  // console.log(selectedSize)

  return (
    <div className="text-sm tgGreen">
      {item.options.sizes && (
        <RadioGroup value={selectedSize} onChange={setSelectedSize}>
          <RadioGroup.Label className="text-xl font-bold text-red-900">
            Select a Size
          </RadioGroup.Label>

          <div className="flex flex-wrap justify-between w-64 text-xl font-extralight">
            {item.options.sizes.selections.map((size, sizeIdx) => (
              <RadioGroup.Option
                key={size.id}
                value={size}
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
                    <div key={sizeIdx} className="relative flex items-start">
                      <div className="flex-1 w-64 min-w-0 text-sm">
                        <label
                          htmlFor={`side-${size.id}`}
                          className="font-medium text-gray-700 select-none"
                        >
                          {size.name}
                        </label>
                      </div>
                      <div className="flex items-center h-5">
                        <input
                          id={`side-${size.id}`}
                          name="plan"
                          type="radio"
                          defaultChecked={size.id === null}
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

export default HandleSizes
