'use client';

import React, { useEffect } from 'react';
import cn from 'classnames';
import { usePopupContext } from '@/context/PopupProvider/PopupProvider';

export default function PopupRoot() {
    const { popupList, dimm } = usePopupContext();

    useEffect(() => {
        if (dimm) {
            popupList.length > 0
                ? (document.body.style.overflow = 'hidden')
                : (document.body.style.overflow = 'unset');
        }
    }, [popupList]);

    return (
        <div
            className={cn('pop', {
                'pop--dimm': popupList.length > 0 && dimm,
                'pop--no-dimm': popupList.length > 0 && !dimm,
            })}
        >
            <div id="popup-root" />
        </div>
    );
}
