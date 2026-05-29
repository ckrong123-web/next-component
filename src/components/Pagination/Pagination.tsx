import React, { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    DoubleLeftIcon,
    DoubleRightIcon,
} from '@/icon';

interface PaginProps {
    type?: 'url' | 'btn';
    startNum?: number;
    max?: number;
    length?: number;
}

export default function Pagination({
    type = 'btn',
    startNum = 1,
    max = 15,
    length = 7,
}: PaginProps) {
    const [start, setStart] = useState(startNum);
    const [active, setActive] = useState(startNum);

    return (
        <div className={cn('pagin')}>
            <div className={cn('pagin__wrap')}>
                <button
                    className={cn('pagin__btn', {
                        'pagin__btn--disable': start <= 1,
                    })}
                    onClick={() => setStart(1)}
                >
                    <DoubleLeftIcon />
                </button>
                <button
                    className={cn('pagin__btn', {
                        'pagin__btn--disable': start <= 1,
                    })}
                    onClick={() => setStart(start - length)}
                >
                    <ArrowLeftIcon />
                </button>
                <ol className={cn('pagin__list')}>
                    {Array.from(
                        { length: Math.min(length, max - start + 1) },
                        (_, i) => start + i,
                    ).map((num) => (
                        <li
                            key={num}
                            className={cn('pagin__item', {
                                'pagin__item--act': num === active,
                            })}
                        >
                            {type === 'url' ? (
                                <Link
                                    href={'#'}
                                    className={cn('pagin__item-cont')}
                                >
                                    {num}
                                </Link>
                            ) : (
                                <button
                                    className={cn('pagin__item-cont')}
                                    onClick={() => setActive(num)}
                                >
                                    {num}
                                </button>
                            )}
                        </li>
                    ))}
                </ol>
                <button
                    className={cn('pagin__btn', {
                        'pagin__btn--disable': start + length > max,
                    })}
                    onClick={() => setStart(start + length)}
                >
                    <ArrowRightIcon />
                </button>
                <button
                    className={cn('pagin__btn', {
                        'pagin__btn--disable': start + length > max,
                    })}
                    onClick={() =>
                        setStart(Math.floor((max - 1) / length) * length + 1)
                    }
                >
                    <DoubleRightIcon />
                </button>
            </div>
        </div>
    );
}
