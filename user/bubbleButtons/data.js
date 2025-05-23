import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  CodeIcon, 
} from "@radix-ui/react-icons";

export const colors = {
  red: "#f44336",
  pink: "#e91e63",
  purple: "#9c27b0",
  deepPurple: "#673ab7",
  indigo: "#3f51b5",
  blue: "#2196f3",
  lightBlue: "#03a9f4",
  cyan: "#00bcd4",
  teal: "#009688",
  green: "#4caf50",
  lightGreen: "#8bc34a",
  lime: "#cddc39",
  yellow: "#ffeb3b",
  amber: "#ffc107",
  orange: "#ff9800",
  deepOrange: "#ff5722",
  brown: "#795548",
  grey: "#9e9e9e",
  blueGrey: "#607d8b",
};


export const marks = [
  { type: "bold", toggleKeyword: "toggleBold", icon: FontBoldIcon },
  { type: "italic", toggleKeyword: "toggleItalic", icon: FontItalicIcon },
  { type: "underline", toggleKeyword: "toggleUnderline", icon: UnderlineIcon },
  { type: "strike", toggleKeyword: "toggleStrike", icon: StrikethroughIcon },
];