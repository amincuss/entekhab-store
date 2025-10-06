import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
 typography: {
  fontFamily: "Vazirmatn, Arial, sans-serif",
 },
 palette: {
  mode: "light",
  primary: { main: "#1446AA" },
  secondary: { main: "#FAAE2E" },
  background: { default: "#ffffff", paper: "#fff" },
 },
  direction: "rtl",
});

export const darkTheme = createTheme({
 typography: {
  fontFamily: "Vazirmatn, Arial, sans-serif",
 },
 palette: {
  mode: "dark",
  primary: { main: "#1446AA" },
  secondary: { main: "#FAAE2E" },
  background: { default: "#121212", paper: "#1d1d1d" },
 },
  direction: "rtl",
});
