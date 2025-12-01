'use client';

import React, { createContext, useContext, useState } from 'react';

interface SnackbarItem {
    id: string;
    clone: string;
}

interface PopupContextProps {
    popupList: string[];
    setPopupList: React.Dispatch<React.SetStateAction<string[]>>;
    snackbarList: SnackbarItem[];
    setSnackbarList: React.Dispatch<React.SetStateAction<SnackbarItem[]>>;
    snackbarCount: number;
    setSnackbarCount: React.Dispatch<React.SetStateAction<number>>;
    dimm: boolean;
    SetDimm: React.Dispatch<React.SetStateAction<boolean>>;
}
const PopupContext = createContext<PopupContextProps>({
    popupList: [],
    setPopupList: () => {},
    snackbarList: [],
    setSnackbarList: () => {},
    snackbarCount: 0,
    setSnackbarCount: () => {},
    dimm: false,
    SetDimm: () => {},
});

export function usePopupContext() {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error(
            'usePopupContext must be used within an PopupContextProvider',
        );
    }
    return context;
}

interface PopupProviderProps {
    children: React.ReactNode;
}

export default function PopupProvider({ children }: PopupProviderProps) {
    const [popupList, setPopupList] = useState<string[]>([]);
    const [snackbarList, setSnackbarList] = useState<SnackbarItem[]>([]);
    const [snackbarCount, setSnackbarCount] = useState<number>(0);
    const [dimm, SetDimm] = useState<boolean>(false);

    return (
        <PopupContext.Provider
            value={{
                popupList,
                setPopupList,
                snackbarList,
                setSnackbarList,
                snackbarCount,
                setSnackbarCount,
                dimm,
                SetDimm,
            }}
        >
            {children}
        </PopupContext.Provider>
    );
}
