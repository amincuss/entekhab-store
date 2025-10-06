"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../store/slices/themeSlice";
import { AppDispatch, RootState } from "../store/store";
export default function ThemeToggle() {
 const mode = useSelector((state: RootState) => state.theme.mode);
 const dispatch: AppDispatch = useDispatch();

 return (
  <IconButton
   aria-label="Mode"
   size="small"
   onClick={() => dispatch(toggleMode())}
  >
   {mode === "light" ? (
    <DarkModeIcon className="text-sky-50" />
   ) : (
    <LightModeIcon className="text-yellow-600" />
   )}
  </IconButton>
 );
}
