import { createContext, useContext, useState, ReactNode } from 'react';

interface PopupState {
    id: string;
    isOpen: boolean;
}

interface PopupContextType {
    popup: PopupState[];
    openPopup: (id: string) => void;
    closePopup: (id: string) => void;
}

// Context 생성 (초기값은 null로 설정)
const PopupContext = createContext<PopupContextType | null>(null);

// Provider 컴포넌트 생성
export const PopupProvider = ({ children }: { children: ReactNode }) => {
    const [popup, setPopup] = useState<PopupState[]>([]);

    const openPopup = (id: string) => {
        setPopup((prev) => {
            if (prev.some((popup) => popup.id === id)) {
                return prev.map((popup) =>
                    popup.id === id ? { ...popup, isOpen: true } : popup,
                );
            }
            return [...prev, { id, isOpen: true }];
        });
    };

    const closePopup = (id: string) => {
        setPopup((prev) =>
            prev.map((popup) =>
                popup.id === id ? { ...popup, isOpen: false } : popup,
            ),
        );
    };

    return (
        <PopupContext.Provider value={{ popup, openPopup, closePopup }}>
            {children}
        </PopupContext.Provider>
    );
};

export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context)
        throw new Error('usePopup must be used within a PopupProvider');
    return context;
};
