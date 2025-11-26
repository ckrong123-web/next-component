import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@/icon';
import cn from 'classnames';

interface AccoButtonProps {
    isOpen?: boolean;
    onClickEvt?: () => void;
}

export default function AccoButton({ isOpen, onClickEvt }: AccoButtonProps) {
    const handleClickEvt = () => {
        onClickEvt && onClickEvt();
    };
    return (
        <button className="btnAcco">
            <div className={cn('btnAcco__wrap')} onClick={handleClickEvt}>
                <span className="btnAcco__icon">
                    {isOpen ? (
                        <ArrowDownIcon blindTxt="닫기" />
                    ) : (
                        <ArrowUpIcon blindTxt="열기" />
                    )}
                </span>
            </div>
        </button>
    );
}
