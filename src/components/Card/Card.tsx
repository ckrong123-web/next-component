import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import Image, { StaticImageData } from 'next/image';

import nodata from '@img/common/nodata.jpg';

interface CardProps {
    href?: string;
    title?: string;
    subTitle?: string;
    children?: React.ReactNode;
    img?: string | StaticImageData;
}

export default function Card({
    href,
    title,
    subTitle,
    children,
    img,
}: CardProps) {
    const Content = (
        <div className={cn('card__wrap')}>
            <div className={cn('card__cont')}>
                {(title || subTitle) && (
                    <div className={cn('card__head')}>
                        {subTitle && (
                            <span className={cn('card__subtit')}>
                                {subTitle}
                            </span>
                        )}
                        {title && (
                            <strong className={cn('card__tit')}>{title}</strong>
                        )}
                    </div>
                )}
                {children && <p className={cn('card__desc')}>{children}</p>}
            </div>
            <div className={cn('card__img')}>
                <Image src={img ? img : nodata} alt="" />
            </div>
        </div>
    );

    if (href) {
        return (
            <Link className={cn('card')} href={href}>
                {Content}
            </Link>
        );
    }

    return <div className={cn('card')}>{Content}</div>;
}
