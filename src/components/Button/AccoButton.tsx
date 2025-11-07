import React, { useState } from 'react';
import { Icon } from '@/components';
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
                    <Icon
                        icoName={isToggleOpen ? 'ico-arrowUp' : 'ico-arrowDown'}
                        blindTxt={isToggleOpen ? '닫기' : '열기'}
                    />
                </span>
            </div>
        </button>
    );
}
