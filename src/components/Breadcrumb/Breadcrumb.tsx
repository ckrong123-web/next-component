import React from 'react';
import Link from 'next/link';
import BreadcrumbItem from './BreadcrumbItem';

import { HomeIcon } from '@/icon';

interface BreadcrumbProps {
    children?: React.ReactNode;
}

export default function Breadcrumb({ children }: BreadcrumbProps) {
    return (
        <div className="breadcrumb">
            <ul className="breadcrumb__list">
                <li className="breadcrumb__item">
                    <Link href="/" className="breadcrumb__home">
                        <HomeIcon />
                        <span className="blind">홈으로</span>
                    </Link>
                </li>
                {children}
            </ul>
        </div>
    );
}

Breadcrumb.Item = BreadcrumbItem;
