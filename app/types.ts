import { Dispatch, SetStateAction } from "react";

export interface DarkModeNavbarProps {
    isDarkMode: boolean,
    setIsDarkMode: Dispatch<SetStateAction<boolean>>,
}

export interface DarkModeProps {
    isDarkMode: boolean,
}