import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

interface BadgeProps {
    color?: 'default' | 'black' | 'red' | 'blue' | 'purple';
    size?: 'big';
    href?: string;
    isBtn?: boolean;
    noBorder?: boolean;
    className?: string;
    children: React.ReactNode;
    [key: string]: any;
}

export default function Badge({
    color = 'default',
    size,
    href,
    isBtn,
    noBorder,
    className,
    children,
    ...rest
}: BadgeProps) {
    const Comp = isBtn ? 'button' : 'span';

    if (href) {
        return (
            <Link
                className={cn(
                    'badge',
                    `badge--${color}`,
                    {
                        [`badge--${size}`]: size,
                        'badge--noborder': noBorder,
                    },
                    className,
                )}
                href={href}
                {...rest}
            >
                {children}
            </Link>
        );
    }

    return (
        <Comp
            className={cn(
                'badge',
                `badge--${color}`,
                {
                    [`badge--${size}`]: size,
                    'badge--noborder': noBorder,
                },
                className,
            )}
            {...rest}
        >
            {children}
        </Comp>
    );
}
