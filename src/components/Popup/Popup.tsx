import React, { use, useEffect, useState, ReactNode } from 'react';
import cn from 'classnames';
import { Icon, Button } from '@/components';
import { createPortal } from 'react-dom';
import { CSSProperties } from 'react';

// import { motion, AnimatePresence, Variants } from 'framer-motion';

import { useLayerPopup } from '@/hook/useLayerPopup';

interface PopupProps {
    id: string;
    className?: 'popup';
    title?: string;
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children?: ReactNode;
    cancelTxt?: string | false;
    confirmTxt?: string | false;
    customFoot?: ReactNode;
    isNoFooter?: boolean;
    onCancelEvt?: () => void;
    onConfirmEvt?: () => void;
    intialAni?: any;
    animateAni?: any;
    exitAni?: any;
}

export default function Popup({
    id,
    className = 'popup',
    title,
    isOpen,
    setOpen,
    children,
    cancelTxt = '취소',
    confirmTxt = '확인',
    customFoot,
    isNoFooter,
    onCancelEvt,
    onConfirmEvt,
    intialAni,
    animateAni,
    exitAni,
}: PopupProps) {
    const { onClose } = useLayerPopup(isOpen, setOpen);

    const handleCancelEvt = () => {
        onCancelEvt && onCancelEvt();
        onClose();
    };

    const handleConfirmEvt = () => {
        onConfirmEvt && onConfirmEvt();
        onClose();
    };

    return (
        <div className={cn(`${className}__wrap`)}>
            <div className={cn(`${className}__head`)}>
                {title && (
                    <span className={cn(`${className}__title`)}>{title}</span>
                )}
                <button
                    className={cn(`${className}__btn`)}
                    onClick={() => {
                        onClose();
                    }}
                >
                    <Icon icoName="ico-close--333" blindTxt="전체닫기" />
                </button>
            </div>
            {children && (
                <div className={cn(`${className}__body`)}>{children}</div>
            )}

            {!isNoFooter && (
                <div className={cn(`${className}__foot`)}>
                    {customFoot ? (
                        customFoot
                    ) : (
                        <>
                            {cancelTxt && (
                                <Button onClickEvt={handleCancelEvt}>
                                    {cancelTxt}
                                </Button>
                            )}
                            {confirmTxt && (
                                <Button
                                    type="blue"
                                    onClickEvt={handleConfirmEvt}
                                >
                                    {confirmTxt}
                                </Button>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
        // <AnimatePresence>
        //     {isOpen && (
        //         <motion.div
        //             className={cn(`${className}`)}
        //             id={id}
        //             key={id}
        //             initial={intialAni ? intialAni : { opacity: 0 }}
        //             animate={animateAni ? animateAni : { opacity: 1 }}
        //             exit={exitAni ? exitAni : { opacity: 0 }}
        //             transition={{ duration: 0.3 }}
        //         >
        //             <
        //         </motion.div>
        //     )}
        // </AnimatePresence>
        // ,
        // document.getElementById('popup-root')!,
    );
}
