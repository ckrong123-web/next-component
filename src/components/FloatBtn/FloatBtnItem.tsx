import React from 'react';
import Link from 'next/link';
import { div } from 'motion/react-client';

interface FloatBtnItem {
    href?: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

export default function FloatBtnItem({ href, icon, children }: FloatBtnItem) {
    const ItemContent = (
        <div className="floatBtn-item__wrap">
            <div className="floatBtn-item__icon">{icon}</div>
            <div className="floatBtn-item__txt">{children}</div>
        </div>
    );
    return (
        <li className="floatBtn__item">
            {href ? (
                <Link href={href} className="floatBtn-item">
                    {ItemContent}
                </Link>
            ) : (
                <button className="floatBtn-item">{ItemContent}</button>
            )}
        </li>
    );
}
