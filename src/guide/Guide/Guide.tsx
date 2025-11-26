import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@/icon';

interface GuideProps {
    title: string;
    children?: React.ReactNode;
}

export default function Guide({ title, children }: GuideProps) {
    return (
        <div>
            <div className="guide">
                <div className="guide__wrap">
                    <strong className="guide__name">
                        <Link href="/" className="guide__prev">
                            <ArrowLeftIcon blindTxt="이전으로 가기" />
                        </Link>

                        {title}
                    </strong>
                    <div className="guide__body">{children}</div>
                </div>
            </div>
        </div>
    );
}
