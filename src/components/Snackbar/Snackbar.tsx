import React, { ReactNode, useState, useEffect } from 'react';
import { Button, Popup } from '@/components';
import { createPortal } from 'react-dom';
import { useSnackbar } from '@/hook/useSnackbar';
import { usePopupContext } from '@/context/PopupProvider/PopupProvider';

interface SnackbarProps {
    id: string;
    title?: string;
    className?: string;
    autoClose?: boolean | number;
    isTextBtn?: string;
    [key: string]: any;
}

export default function Snackbar({
    id,
    title,
    className,
    autoClose,
    isTextBtn,
    ...rest
}: SnackbarProps) {
    const [snackRoot, setsnackRoot] = useState<HTMLElement | null>(null);
    const { snackbarList } = usePopupContext();

    useEffect(() => {
        setsnackRoot(document.getElementById('snackbar-root'));
    }, []);

    const { onClose } = useSnackbar();

    return (
        <>
            {snackRoot &&
                snackbarList
                    .filter((item) => item.id === id)
                    .map((item) =>
                        createPortal(
                            <Popup
                                title={title}
                                id={item.clone}
                                name="snackbar"
                                className={className}
                                cancelTxt={false}
                                autoClose={true}
                                {...rest}
                                closeEvt={() => {
                                    onClose(item.clone);
                                }}
                                isNoFooter
                                key={item.clone}
                                customHeadBtn={
                                    isTextBtn && (
                                        <Button
                                            onClickEvt={() => {
                                                onClose(item.clone);
                                            }}
                                        >
                                            {isTextBtn}
                                        </Button>
                                    )
                                }
                            />,
                            snackRoot,
                            item.clone,
                        ),
                    )}
        </>
    );
}
