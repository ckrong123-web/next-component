import React, { Children, ReactElement, useRef, useState } from 'react';
import cn from 'classnames';
import { ArrowLeftIcon, ArrowRightIcon } from '@/icon';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

import { SlideItem, SlideItemProps } from './SlideItem';

interface SlideProps {
    nav?: boolean;
    pagin?: boolean;
    navOnly?: 'prev' | 'next';
    progress?: boolean;
    className?: string;
    children: ReactElement<SlideItemProps> | ReactElement<SlideItemProps>[];
    [key: string]: any;
}

export default function Slide({
    nav = true,
    pagin = true,
    navOnly,
    progress,
    className,
    children,
    ...rest
}: SlideProps) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperReady, setSwiperReady] = useState(false);

    const slideOpt: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        modules: [
            ...(nav || navOnly ? [Navigation] : []),
            ...(pagin || progress ? [Pagination] : []),
            // ...(nav ? [Navigation] : []),
        ],
        spaceBetween: 16,
        navigation:
            nav || navOnly
                ? {
                      prevEl: '.slide__prev',
                      nextEl: '.slide__next',
                  }
                : false,
        pagination:
            pagin || progress
                ? {
                      clickable: true,
                      type: progress ? 'progressbar' : 'bullets',
                  }
                : false,
        observer: true,
        observeParents: true,
    };

    return (
        <div
            className={cn('slide', className, {
                'slide--hasNav': nav || navOnly,
                'slide--notReady': !swiperReady,
            })}
        >
            <div className="slide__wrap">
                {(nav || navOnly === 'next') && (
                    <div className="slide__nav slide__nav--prev">
                        <button
                            className="slide__nav-btn slide__prev"
                            ref={prevRef}
                        >
                            <ArrowLeftIcon />
                            <span className="blind">슬라이드 이전 버튼</span>
                        </button>
                    </div>
                )}
                <div className="slide__swiper-wrap">
                    <Swiper
                        className="slide__swiper"
                        onSwiper={() => {
                            setSwiperReady(true);
                        }}
                        pagination={pagin}
                        {...slideOpt}
                        {...rest}
                    >
                        {Children.map(children, (item, num) => (
                            <SwiperSlide className="slide__item" key={num}>
                                {item}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {(nav || navOnly === 'next') && (
                    <div className="slide__nav slide__nav--next">
                        <button
                            className="slide__nav-btn slide__next"
                            ref={nextRef}
                        >
                            <ArrowRightIcon />
                            <span className="blind">슬라이드 다음 버튼</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

Slide.Item = SlideItem;
