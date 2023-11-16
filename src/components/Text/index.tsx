import React from "react";

const sizeClasses = {
  txtInterRegular16Gray600: "font-inter font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterBold16: "font-bold font-inter",
  txtWhyteRegular48: "font-normal font-whyte",
  txtNewsreaderMedium32: "font-medium font-newsreader",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterSemiBold20Lightgreen900: "font-inter font-semibold",
  txtInterSemiBold16WhiteA700: "font-inter font-semibold",
  txtInterLight20: "font-inter font-light",
  txtInterSemiBold20: "font-inter font-semibold",
  txtNewsreaderRegular64: "font-newsreader font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
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
