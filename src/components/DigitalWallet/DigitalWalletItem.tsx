import React, { useRef } from 'react';
import Link from 'next/link';
import { useDigitalWallet } from './DigitalWallet';
import { ArrowRightIcon } from '@/icon';

interface DigitalWalletItemProps {
    index?: number;
    tit: string;
    txt?: string;
    href?: string;
    background?: string;
    onClickEvt?: () => void;
    [key: string]: any;
}

export default function DigitalWalletItem({
    index,
    tit,
    txt,
    href,
    background = '#0260eb',
    onClickEvt,
    ...rest
}: DigitalWalletItemProps) {
    const { length } = useDigitalWallet();
    const location = useRef('0');
    const setLocation = () => {
        if (index == 0) {
            location.current = '0';
        } else {
            location.current = `${(Number(index) * 58 + 36) / 10}rem`;
        }
        return location.current;
    };
    const Tag: any = href ? Link : 'button';

    const handleClickEvt = () => {
        onClickEvt && onClickEvt();
    };

    return (
        <li
            className="digitalWallet__card-item"
            style={{
                bottom: setLocation(),
                backgroundColor: background,
                zIndex: length - Number(index),
            }}
            {...rest}
        >
            <Tag
                className="digitalWallet__card-itemWrap"
                href={href}
                onClick={handleClickEvt}
            >
                <div className="digitalWallet__card-itemHead">
                    <span className="digitalWallet__card-itemTit">{tit}</span>
                    {txt && (
                        <span className="digitalWallet__card-itemTxt">
                            {txt}
                        </span>
                    )}
                    <span className="digitalWallet__card-itemIcon">
                        <ArrowRightIcon />
                    </span>
                </div>
            </Tag>
        </li>
    );
}
