import { ReactNode } from 'react';
import cn from 'classnames';
import { SwiperSlide } from 'swiper/react';

export interface SlideItemProps {
    className?: string;
    children: ReactNode;
}

export function SlideItem({ className, children }: SlideItemProps) {
    return <div className="slide-item">{children}</div>;
}
