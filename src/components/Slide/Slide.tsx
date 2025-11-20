import React, { Children, ReactElement, useRef, useEffect } from 'react';
import cn from 'classnames';
import { Icon } from '@/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import { SlideItem, SlideItemProps } from './SlideItem';

interface SlideProps {
    nav?: boolean;
    navOnly?: 'prev' | 'next';
    className?: string;
    children: ReactElement<SlideItemProps> | ReactElement<SlideItemProps>[];
    [key: string]: any;
}

export default function Slide({
    nav = true,
    navOnly,
    className,
    children,
    ...rest
}: SlideProps) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const slideOpt = {
        className: 'slide__swiper',
        loop: true,
        slidesPerView: 1,
        modules: [
            ...(nav ? [Navigation] : []),
            // ...(nav ? [Navigation] : []),
        ],

        navigation:
            nav || navOnly
                ? {
                      prevEl: '.slide__prev',
                      nextEl: '.slide__next',
                  }
                : false,
    };

    return (
        <div
            className={cn('slide', className, {
                'slide--hasNav': nav || navOnly,
            })}
        >
            <div className="slide__wrap">
                {(nav || navOnly === 'next') && (
                    <div className="slide__nav slide__nav--prev">
                        <button
                            className="slide__nav-btn slide__prev"
                            ref={prevRef}
                        >
                            <Icon icoName="ico-arrowLeft--blue" />
                            <span className="blind">슬라이드 이전 버튼</span>
                        </button>
                    </div>
                )}
                <Swiper {...slideOpt} {...rest}>
                    {Children.map(children, (item) => (
                        <SwiperSlide className="slide__item">
                            {item}
                        </SwiperSlide>
                    ))}
                </Swiper>
                {(nav || navOnly === 'next') && (
                    <div className="slide__nav slide__nav--next">
                        <button
                            className="slide__nav-btn slide__next"
                            ref={nextRef}
                        >
                            <Icon icoName="ico-arrowRight--blue" />
                            <span className="blind">슬라이드 다음 버튼</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

Slide.Item = SlideItem;
