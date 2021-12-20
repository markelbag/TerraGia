import React from "react";

const CheckBox = React.forwardRef(
  (
    {
      id,
      labelText,
      onChange,
      onClick,
      hideLabel,
      invalid,
      invalidText,
      value,
      name,
      checked,
      option,
      title = "",
      ...other
    },
    ref
  ) => {
 

    const label = labelText ? (
      <label htmlFor={id} className="flex float-left">
        {labelText}
      </label>
    ) : null;

    const handleOnchange = (e) => {
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className="flex">
        <div className="flex w-full pr-6 justify-between">
          {label}
          <input
            type="checkbox"
            className=" float-right"
            onChange={handleOnchange}
            value={value}
            checked={checked}
            id={id}
          />

        </div>
      </div>
    );
  }
);

CheckBox.defaultProps = {
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  value: "",
  checked: false
};

export default CheckBox;
