import variable from "./../variables/platform";

export default (variables = variable) => {
  const checkBoxTheme = {
    ".checked": {
      "NativeBase.Icon": {
        color: 'white' //variables.checkboxTickColor
      },
      "NativeBase.IconNB": {
        color: 'white' //variables.checkboxTickColor
      }
    },
    "NativeBase.Icon": {
      color: "transparent",
      lineHeight: variables.CheckboxIconSize,
      marginTop: variables.CheckboxIconMarginTop,
      fontSize: variables.CheckboxFontSize
    },
    "NativeBase.IconNB": {
      color: "transparent",
      lineHeight: variables.CheckboxIconSize,
      marginTop: variables.CheckboxIconMarginTop,
      fontSize: variables.CheckboxFontSize
    },
    // borderRadius: variables.CheckboxRadius,
    overflow: "hidden",
    width: variables.checkboxSize,
    height: variables.checkboxSize,
    // borderWidth: variables.CheckboxBorderWidth,
    // paddingBottom: variables.CheckboxPaddingBottom,
  };

  return checkBoxTheme;
};
