import React, { useState, useCallback } from "react";
import CheckBox from "./CheckBox";

const CheckBoxGroup = React.forwardRef(
  (
    {
      options,
      id,
      selectedValues,
      name,
      onChange,
      onClick,
      errorText,
      checked,
      // remove,
      handleRemove
    },
    ref
  ) => {
    
    //Mimicing the force update in the fucntional component
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const handleOnchange = (val, checked) => {
      if (onChange) {
        if (checked) {
          let index = selectedValues.indexOf(val);
          if (index === -1) {
            selectedValues.push(val);
          }
        } else {
          let index = selectedValues.indexOf(val);
          if (index !== -1) {
            selectedValues.splice(index, 1);
          }
        }
        onChange([...selectedValues]);
      }
      // force update in functional component
      forceUpdate();
    };
    console.log(selectedValues)
    return (
      <div className="flex w-full">
        <div className="w-full">
          {options.map((option, index) => {
            return (
              <div className="text-sm font-extralight" key={index}>
                <CheckBox
                  id={option.label}
                  labelText={option.label}
                  value={option.value}
                  name={option.value}
                  onChange={(e) => {
                    handleOnchange(option.value, e.target.checked);
                  }}
                  checked={
                    checked ? checked : selectedValues.includes(option.value)
                  }
                  {...option}
                />
                {/* {remove && (
                  <div
                    className="flex h-6 w-6 pt-2 items-center justify-between cursor-pointer"
                    onClick={() => handleRemove(option.value)}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                )} */}
              </div>
            );
          })}
        </div>
        
      </div>
    );
  }
);

CheckBoxGroup.defaultProps = {
  indeterminate: false,
  onChange: () => {},
  errorText: "",
  onClick: () => {},
  selectedValues: [],
  options: [],
  // remove: false,
  handleRemove: () => {}
};

export default CheckBoxGroup;

//SET OF OPTIONS ARE PASSED
//SET OF SELECTED OPTIONS ARE PASSED=
//WHENEVER CHANGED GIVE THE USER SELECTED ONES
