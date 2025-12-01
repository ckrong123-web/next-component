import React, { useRef, useEffect, useState, ReactNode } from 'react';
import cn from 'classnames';
import { Button } from '@/components';
import { CloseIcon } from '@/icon';

import { AnimatePresence, motion } from 'motion/react';

import { usePopupContext } from '@/context/PopupProvider/PopupProvider';

interface PopupProps {
    id: string;
    name: string;
    className?: string;
    title?: string;
    children?: ReactNode;
    cancelTxt?: string | false;
    confirmTxt?: string | false;
    customFoot?: ReactNode;
    isNoFooter?: boolean;
    isNoHeadBtn?: boolean;
    autoClose?: boolean | number;
    closeEvt: () => void;
    onCancelEvt?: () => void;
    onConfirmEvt?: () => void;
}

export default function Popup({
    id,
    name = 'popup',
    className,
    title,
    children,
    cancelTxt = '취소',
    confirmTxt = '확인',
    customFoot,
    isNoFooter,
    isNoHeadBtn,
    autoClose,
    closeEvt,
    onCancelEvt,
    onConfirmEvt,
}: PopupProps) {
    const { popupList } = usePopupContext();
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        console.log(id);
        popupList.includes(id) ? setOpen(true) : setOpen(false);
    }, [popupList]);

    const handleCancelEvt = () => {
        onCancelEvt && onCancelEvt();
        closeEvt();
    };

    const handleConfirmEvt = () => {
        onConfirmEvt && onConfirmEvt();
        closeEvt();
    };

    const timeRef = useRef<NodeJS.Timeout | null>(null);
    const time = typeof autoClose === 'number' ? autoClose : 3000;

    const handleAutoCloseEvt = () => {
        timeRef.current = setTimeout(() => {
            closeEvt();
            timeRef.current = null;
        }, time);
    };

    useEffect(() => {
        timeRef.current && clearTimeout(timeRef.current);
    }, []);
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(`${name}`, className)}
                    onAnimationComplete={() => {
                        autoClose && handleAutoCloseEvt();
                    }}
                >
                    <div className={cn(`${name}__wrap`)}>
                        <div className={cn(`${name}__head`)}>
                            {title && (
                                <span className={cn(`${name}__title`)}>
                                    {title}
                                </span>
                            )}
                            {!isNoHeadBtn && (
                                <button
                                    className={cn(`${name}__btn`)}
                                    onClick={() => {
                                        closeEvt();
                                    }}
                                >
                                    <CloseIcon />
                                </button>
                            )}
                        </div>
                        {children && (
                            <div className={cn(`${name}__body`)}>
                                {children}
                            </div>
                        )}

                        {!isNoFooter && (
                            <div className={cn(`${name}__foot`)}>
                                {customFoot ? (
                                    customFoot
                                ) : (
                                    <>
                                        {cancelTxt && (
                                            <Button
                                                onClickEvt={handleCancelEvt}
                                            >
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
                </motion.div>
            )}
        </AnimatePresence>
    );
}
