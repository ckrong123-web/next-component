import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components';
import { useDigitalWallet } from './DigitalWallet';

interface DigitalWalletItemProps {
    index?: number;
    tit: string;
    txt?: string;
    href: string;
    background: string;
}

export default function DigitalWalletItem({
    index,
    tit,
    txt,
    href,
    background,
}: DigitalWalletItemProps) {
    const { length } = useDigitalWallet();
    const location = useRef('0');
    const setLocation = () => {
        if (index == 0) {
            location.current = '0';
        } else {
            location.current = `${(Number(index) * 58 + 36) / 10}rem`;
            console.log(location.current);
        }
        return location.current;
    };

    return (
        <li
            className="digitalWallet__card-item"
            style={{
                bottom: setLocation(),
                backgroundColor: background,
                zIndex: length - Number(index),
            }}
        >
            <Link className="digitalWallet__card-itemWrap" href={href}>
                <div className="digitalWallet__card-itemHead">
                    <span className="digitalWallet__card-itemTit">{tit}</span>
                    {txt && (
                        <span className="digitalWallet__card-itemTxt">
                            {txt}
                        </span>
                    )}
                    <span className="digitalWallet__card-itemIcon">
                        <Icon icoName="ico-arrowRight" />
                    </span>
                </div>
            </Link>
        </li>
    );
}
