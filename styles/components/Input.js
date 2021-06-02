import variable from "./../variables/platform";

export default (variables = variable) => {
  const inputTheme = {
    ".multiline": {
      height: null
    },
    height: variables.inputHeightBase,
    color: variables.inputColor,
    paddingHorizontal: 0,
    paddingVertical: 10,
    flex: 1,
    fontSize: variables.inputFontSize,
    lineHeight: variables.inputLineHeight
  };

  return inputTheme;
};
