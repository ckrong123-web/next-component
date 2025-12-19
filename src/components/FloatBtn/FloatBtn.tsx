import React, { useState } from 'react';
import cn from 'classnames';
import FloatBtnItem from './FloatBtnItem';

import { CloseIcon } from '@/icon';

interface FloatBtnProps {
    children: React.ReactNode;
    [key: string]: any;
}

export default function FloatBtn({ children, ...rest }: FloatBtnProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className={cn('floatBtn', {
                'floatBtn--open': isOpen,
            })}
            {...rest}
        >
            <div className="floatBtn__wrap">
                <ul className="floatBtn__list">{children}</ul>
                <button
                    className={cn('floatBtn__btn', {
                        'floatBtn__btn--open': isOpen,
                    })}
                    onClick={() => {
                        setIsOpen((prev) => !prev);
                    }}
                >
                    <CloseIcon />
                    <span className="blind">{isOpen ? '닫기' : '열기'}</span>
                </button>
            </div>
        </div>
    );
}

FloatBtn.Item = FloatBtnItem;
