import React, { ReactNode, useState, useEffect } from 'react';
import { Popup } from '@/components';
import { createPortal } from 'react-dom';
import { useAlert } from '@/hook/useAlert';

interface AlertProps {
    id: string;
    title?: string;
    children?: ReactNode;
    className?: string;
    autoClose?: boolean | number;
    [key: string]: any;
}

export default function Alert({
    id,
    title,
    className,
    children,
    autoClose,
    ...rest
}: AlertProps) {
    const [popRoot, setPopRoot] = useState<HTMLElement | null>(null);
    useEffect(() => {
        setPopRoot(document.getElementById('popup-root'));
    }, []);

    const { onClose } = useAlert();

    return (
        <>
            {popRoot
                ? createPortal(
                      <Popup
                          title={title}
                          id={id}
                          name="alert"
                          className={className}
                          cancelTxt={false}
                          autoClose={autoClose}
                          isNoHeadBtn
                          {...rest}
                          closeEvt={() => {
                              onClose(id);
                          }}
                      >
                          {children}
                      </Popup>,
                      popRoot,
                  )
                : null}
        </>
    );
}
