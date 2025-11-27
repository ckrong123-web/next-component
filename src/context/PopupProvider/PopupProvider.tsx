'use client';

import React, { createContext, useContext, useState } from 'react';

interface PopupContextProps {
    popupList: string[];
    setPopupList: React.Dispatch<React.SetStateAction<string[]>>;
    dimm: boolean;
    SetDimm: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupContext = createContext<PopupContextProps>({
    popupList: [],
    setPopupList: () => {},
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
    const [dimm, SetDimm] = useState<boolean>(false);

    return (
        <PopupContext.Provider
            value={{ popupList, setPopupList, dimm, SetDimm }}
        >
            {children}
        </PopupContext.Provider>
    );
}
