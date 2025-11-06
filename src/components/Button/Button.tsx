import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
interface ButtonProps {
    children?: React.ReactNode;
    href?: string;
    type?: 'blue' | 'gray' | 'darkGray';
    disable?: boolean;
    onClickEvt?: () => void;
}

export default function Button({
    children,
    type,
    href,
    disable = false,
    onClickEvt,
}: ButtonProps) {
    const contents = (
        <span
            className={cn('btn__wrap', {
                'btn--blue': type === 'blue',
                'btn--gray': type === 'gray',
                'btn--darkGray': type === 'darkGray',
            })}
        >
            {children}
        </span>
    );

    const handleClickEvt = () => {
        onClickEvt && onClickEvt();
    };

    return !href ? (
        <button className="btn" onClick={handleClickEvt} disabled={disable}>
            {contents}
        </button>
    ) : (
        <Link href={href} className="btn" onClick={handleClickEvt}>
            {contents}
        </Link>
    );
}
