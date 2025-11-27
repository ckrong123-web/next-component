import React, { ReactNode, useState, useEffect } from 'react';
import { Popup } from '@/components';
import { createPortal } from 'react-dom';

interface LayerPopupProps {
    id: string;
    title?: string;
    children?: ReactNode;
    className?: string;
    [key: string]: any;
}

export default function LayerPopup({
    id,
    title,
    className,
    children,
    ...rest
}: LayerPopupProps) {
    const [popRoot, setPopRoot] = useState<HTMLElement | null>(null);
    useEffect(() => {
        setPopRoot(document.getElementById('popup-root'));
    }, []);

    return (
        <>
            {popRoot
                ? createPortal(
                      <Popup
                          title={title}
                          id={id}
                          name="layer-popup"
                          className={className}
                          {...rest}
                      >
                          {children}
                      </Popup>,
                      popRoot,
                  )
                : null}
        </>
    );
}
