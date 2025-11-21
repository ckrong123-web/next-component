import React, { ReactNode } from 'react';
import cn from 'classnames';

interface IconBaseProps {
    blindTxt?: string;
    color?: string;
    className?: string;
    children: ReactNode;
}

export default function IconBase({
    blindTxt,
    className,
    children,
}: IconBaseProps) {
    return (
        <span className={cn('icon', className)}>
            <span className="icon__wrap">
                {children}
                {blindTxt && <span className="blind">{blindTxt}</span>}
            </span>
        </span>
    );
}
