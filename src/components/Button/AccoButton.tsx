import React, { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@/icon';
import cn from 'classnames';

interface AccoButtonProps {
    isOpen?: boolean;
    onClickEvt?: () => void;
}

export default function AccoButton({ isOpen, onClickEvt }: AccoButtonProps) {
    const [isToggleOpen, setIsToggleOpen] = useState(isOpen ? true : false);
    const handleClickEvt = () => {
        onClickEvt && onClickEvt();
        setIsToggleOpen((prevState) => !prevState);
    };
    return (
        <button className="btnAcco">
            <div className={cn('btnAcco__wrap')} onClick={handleClickEvt}>
                <span className="btnAcco__icon">
                    {isToggleOpen ? (
                        <ArrowDownIcon blindTxt="닫기" />
                    ) : (
                        <ArrowUpIcon blindTxt="열기" />
                    )}
                </span>
            </div>
        </button>
    );
}
