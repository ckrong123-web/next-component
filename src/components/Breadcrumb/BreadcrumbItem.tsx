import React from 'react';
import Link from 'next/link';
import { span } from 'motion/react-client';

interface BreadcrumbItemProps {
    href?: string;
    children?: React.ReactNode;
}

export default function BreadcrumbItem({
    href,
    children,
}: BreadcrumbItemProps) {
    return (
        <li className="breadcrumb__item">
            {href ? (
                <Link href={href} className="breadcrumb__item-wrap">
                    {children}
                </Link>
            ) : (
                <span className="breadcrumb__item-wrap">{children}</span>
            )}
        </li>
    );
}
