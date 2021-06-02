import color from "color";

import { Platform, Dimensions, PixelRatio } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = undefined;

module.exports = {
  platformStyle,
  platform,

  // Custom Color
  white: '#FFFFFF',
  red: '#ed2f2f',
  grey: '#EFEFEF',
  darkGrey: '#a1a1a1',
  lightGrey: '#d0d0d2',
  whiteBlue: 'rgba(34, 127, 158, 0.06)',
  lightBlue: '#5a7786',
  midBlue: '#227F9E',
  navy: '#002D45',
  darkBlue: '#222b45',
  purpleBlue: '#6021d3',
  black: '#000000',
  gunMetal: '#4C525C',

  // AndroidRipple
  androidRipple: true,
  androidRippleColor: "rgba(256, 256, 256, 0.3)",
  androidRippleColorDark: "rgba(0, 0, 0, 0.15)",

  // Badge
  badgeBg: "#ED1727",
  badgeColor: "#fff",
  badgePadding: platform === "ios" ? 3 : 0,

  // Button
  btnFontFamily: platform === "ios" ? "System" : "Sf_Pro_Text",
  btnDisabledBg: "#b5b5b5",
  btnDisabledClr: "#f1f1f1",
  buttonPadding: 6,
  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return platform === "ios" ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  // Card
  cardDefaultBg: "#fff",
  cardBorderColor: "#ccc",

  // CheckBox
  CheckboxRadius: platform === "ios" ? 13 : 0,
  CheckboxBorderWidth: platform === "ios" ? 1 : 2,
  CheckboxPaddingLeft: platform === "ios" ? 4 : 2,
  CheckboxPaddingBottom: platform === "ios" ? 0 : 5,
  CheckboxIconSize: platform === "ios" ? 21 : 14,
  CheckboxIconMarginTop: platform === "ios" ? undefined : 1,
  CheckboxFontSize: platform === "ios" ? 20 : 18,
  DefaultFontSize: 17,
  checkboxBgColor: "#0087FB",
  checkboxSize: 20,
  checkboxTickColor: "#fff",

  // Color
  brandPrimary: "#1A1824",
  brandInfo: "#62B1F6",
  brandSuccess: "#5cb85c",
  brandDanger: "#d9534f",
  brandWarning: "#f0ad4e",
  brandSidebar: "#252932",

  // Font
  fontFamily: platform === "ios" ? "System" : "Sf_Pro_Text",
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: 97,
  footerDefaultBg: "#FFFFFF",

  // FooterTab
  tabBarTextColor: "#cfcfd1",
  tabBarTextSize: platform === "ios" ? 14 : 11,
  activeTab: platform === "ios" ? "#007aff" : "#fff",
  sTabBarActiveTextColor: "#007aff",
  tabBarActiveTextColor: "#000",
  tabActiveBgColor: platform === "ios" ? "#1569f4" : undefined,

  // Header
  toolbarBtnColor: "#1A1824",
  toolbarDefaultBg: "#FFFFFF",
  toolbarHeight: platform === "ios" ? 64 : 56,
  toolbarIconSize: platform === "ios" ? 20 : 22,
  toolbarSearchIconSize: platform === "ios" ? 20 : 23,
  toolbarInputColor: platform === "ios" ? "#CECDD2" : "#fff",
  searchBarHeight: platform === "ios" ? 30 : 40,
  toolbarInverseBg: "#222",
  toolbarTextColor: "#1A1824",
  iosStatusbar: "dark-content",
  toolbarDefaultBorder: "#F5FBFF",
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.2).hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hex();
  },

  // Icon
  iconFamily: "Ionicons",
  iconFontSize: platform === "ios" ? 30 : 28,
  iconMargin: 7,
  iconHeaderSize: platform === "ios" ? 33 : 24,
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // InputGroup
  inputFontSize: 15,
  inputBorderColor: "#1A1824",
  inputSuccessBorderColor: "#2b8339",
  inputErrorBorderColor: "#ed2f2f",
  inputGroupMarginBottom: 10,
  inputHeightBase: 44,
  inputPaddingLeft: 5,
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return "#8C8B91";
  },
  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: platform === "ios" ? 37 : 30,
  lineHeight: platform === "ios" ? 20 : 24,

  // List
  listBorderColor: "#c9c9c9",
  listDividerBg: "#f4f4f4",
  listItemHeight: 45,
  listBtnUnderlayColor: "#DDD",
  listItemPadding: platform === "ios" ? 10 : 12,
  listNoteColor: "#808080",
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: "#E4202D",
  inverseProgressColor: "#1A191B",

  // Radio Button
  radioBtnSize: platform === "ios" ? 25 : 23,
  radioSelectedColorAndroid: "#5067FF",
  radioBtnLineHeight: platform === "ios" ? 29 : 24,
  radioColor: "#7e7e7e",
  get radioSelectedColor() {
    return color(this.radioColor).darken(0.2).hex();
  },

  // Segment
  segmentBackgroundColor: "#3F51B5",
  segmentActiveBackgroundColor: "#fff",
  segmentTextColor: "#fff",
  segmentActiveTextColor: "#3F51B5",
  segmentBorderColor: "#fff",
  segmentBorderColorMain: "#3F51B5",

  // Spinner
  defaultSpinnerColor: "#0087FB",
  inverseSpinnerColor: "#1A191B",

  // Tab
  tabDefaultBg: "#E7F4FF",
  topTabBarTextColor: "#0087FB",
  topTabBarActiveTextColor: "#0087FB",
  topTabActiveBgColor: platform === "ios" ? "#E7F4FF" : undefined,
  topTabBarBorderColor: "#fff",
  topTabBarActiveBorderColor: "#0087FB",

  // Tabs
  tabBgColor: "#F8F8F8",
  tabFontSize: 15,
  tabTextColor: "#222222",

  // Text
  textColor: "#000",
  inverseTextColor: "#fff",
  lightTextColor: "#CFCFCF",
  contentTextColor: "#1A1824",
  darkTextColor: "#444",
  noteFontSize: 12,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: platform === "ios" ? "System" : "Sf_Pro_Text",
  titleFontSize: platform === "ios" ? 16 : 18,
  subTitleFontSize: platform === "ios" ? 12 : 14,
  subtitleColor: "#1A1824",
  titleFontColor: "#1A1824",

  // Other
  borderRadiusBase: 6,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownBg: "#000",
  dropdownLinkColor: "#414142",
  inputLineHeight: 15,
  jumbotronBg: "#C9C9CE",
  jumbotronPadding: 30,
  deviceWidth,
  deviceHeight,
  inputGroupRoundedBorderRadius: 30
};
