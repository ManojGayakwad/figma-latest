import React from "react";

const sizeClasses = {
  txtRobotoRomanBold24: "font-bold font-roboto",
  txtRobotoRomanBold12: "font-bold font-roboto",
  txtRobotoRomanBold22: "font-bold font-roboto",
  txtRobotoRomanBold10: "font-bold font-roboto",
  txtInterRegular1395: "font-inter font-normal",
  txtRobotoRomanBold20: "font-bold font-roboto",
  txtRobotoRomanBold30: "font-bold font-roboto",
  txtRobotoRomanRegular12Bluegray200: "font-normal font-roboto",
  txtRobotoRomanRegular16: "font-normal font-roboto",
  txtInterRegular12Blue80001: "font-inter font-normal",
  txtRobotoRomanBold26WhiteA700: "font-bold font-roboto",
  txtInterRegular12: "font-inter font-normal",
  txtRobotoRomanRegular10: "font-normal font-roboto",
  txtInterRegular8: "font-inter font-normal",
  txtRobotoRomanRegular12: "font-normal font-roboto",
  txtRobotoRomanBold16WhiteA700: "font-bold font-roboto",
  txtRobotoRomanBold14Bluegray900: "font-bold font-roboto",
  txtInterRegular1002: "font-inter font-normal",
  txtRobotoRomanBold16: "font-bold font-roboto",
  txtRobotoRomanBold26: "font-bold font-roboto",
  txtRobotoRomanBold22Bluegray900: "font-bold font-roboto",
  txtRobotoRomanRegular14: "font-normal font-roboto",
  txtRobotoRomanBold14: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
