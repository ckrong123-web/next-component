import React, { ReactNode } from 'react';
import { Popup } from '@/components';

interface LayerPopupProps {
    id: string;
    title?: string;
    isOpen?: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children?: ReactNode;
    cancelTxt?: string | false;
    confirmTxt?: string | false;
    customFoot?: ReactNode;
    isNoFooter?: boolean;
    onCancelEvt?: () => void;
    onConfirmEvt?: () => void;
}

export default function LayerPopup({
    id,
    title,
    isOpen = false,
    setOpen,
    children,
    cancelTxt,
    confirmTxt,
    customFoot,
    isNoFooter,
    onCancelEvt,
    onConfirmEvt,
}: LayerPopupProps) {
    return (
        <Popup
            id={id}
            className="popup"
            title={title}
            isOpen={isOpen}
            setOpen={setOpen}
            cancelTxt={cancelTxt}
            confirmTxt={confirmTxt}
            customFoot={customFoot}
            isNoFooter={isNoFooter}
            onCancelEvt={onCancelEvt}
            onConfirmEvt={onConfirmEvt}
        >
            {children}
        </Popup>
    );
}
