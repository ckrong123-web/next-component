import React, { use, useEffect, useState, ReactNode } from 'react';
import cn from 'classnames';
import { Button } from '@/components';
import { CloseIcon } from '@/icon';

import { AnimatePresence, motion } from 'motion/react';

import { usePopupContext } from '@/context/PopupProvider/PopupProvider';

import { useLayerPopup } from '@/hook/useLayerPopup';

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
    onCancelEvt,
    onConfirmEvt,
}: PopupProps) {
    const { popupList } = usePopupContext();
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        console.log(id);
        popupList.includes(id) ? setOpen(true) : setOpen(false);
    }, [popupList]);
    const { onClose } = useLayerPopup();

    const handleCancelEvt = () => {
        onCancelEvt && onCancelEvt();
        onClose(id);
    };

    const handleConfirmEvt = () => {
        onConfirmEvt && onConfirmEvt();
        onClose(id);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(`${name}`, className)}
                >
                    <div className={cn(`${name}__wrap`)}>
                        <div className={cn(`${name}__head`)}>
                            {title && (
                                <span className={cn(`${name}__title`)}>
                                    {title}
                                </span>
                            )}
                            <button
                                className={cn(`${name}__btn`)}
                                onClick={() => {
                                    onClose(id);
                                }}
                            >
                                <CloseIcon />
                            </button>
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
