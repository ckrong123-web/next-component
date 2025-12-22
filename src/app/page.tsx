'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import {
    PopupGuide,
    InputGuide,
    ButtonGuide,
    TabGuide,
    RadioGuide,
    SliderGuide,
    SelectBoxGuide,
    SwiperGuide,
    StepperGuide,
    ProgressGuide,
    IconGuide,
    DigitalWalletGuide,
    AccordionGuide,
    BadgeGuide,
    BreadcrumbGuide,
    CheckboxGuide,
    ChipGuide,
    DatepickerGuide,
    NodataGuide,
    FloatBtnGuide,
} from '@/guide';

const listData = [
    { compnent: 'Accordion', guide: <AccordionGuide /> },
    { compnent: 'Badge', guide: <BadgeGuide /> },
    { compnent: 'Breadcrumb', guide: <BreadcrumbGuide /> },
    { compnent: 'Button', guide: <ButtonGuide /> },
    { compnent: 'Checkbox', guide: <CheckboxGuide /> },
    { compnent: 'Chip', guide: <ChipGuide /> },
    { compnent: 'Datepicker', guide: <DatepickerGuide /> },
    { compnent: 'DigitalWallet', guide: <DigitalWalletGuide /> },
    { compnent: 'Icon', guide: <IconGuide /> },
    { compnent: 'Input', guide: <InputGuide /> },
    { compnent: 'Popup', guide: <PopupGuide /> },
    { compnent: 'Progress', guide: <ProgressGuide /> },
    { compnent: 'Radio', guide: <RadioGuide /> },
    { compnent: 'SelectBox', guide: <SelectBoxGuide /> },
    { compnent: 'Slider', guide: <SliderGuide /> },
    { compnent: 'Stepper', guide: <StepperGuide /> },
    { compnent: 'Swiper', name: 'Slide (swiper)', guide: <SwiperGuide /> },
    { compnent: 'Tab', guide: <TabGuide /> },
    { compnent: 'Nodata', guide: <NodataGuide /> },
    { compnent: 'FloatBtn', guide: <FloatBtnGuide /> },
];

import { ArrowRightIcon, ArrowLeftIcon } from '@/icon';

export default function Page() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div>
                <div className={cn('guide-list', open && 'guide-list--open')}>
                    <button
                        className="guide-list__btn"
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        {open ? (
                            <ArrowLeftIcon color="#fff" />
                        ) : (
                            <ArrowRightIcon color="#fff" />
                        )}
                        <span className="blind">{open ? '닫기' : '열기'}</span>
                    </button>
                    {listData.map((item, num) => {
                        return (
                            <Link
                                href={`/${item.compnent.toLowerCase()}`}
                                key={num}
                            >
                                {item.name ? item.name : item.compnent}
                            </Link>
                        );
                    })}
                </div>
                <div className={cn('guide-body', open && 'guide-body--open')}>
                    {listData.map((item, num) => {
                        return (
                            <div key={num} className="guide">
                                <div className="guide__wrap guide__wrap--listpage">
                                    {item.guide}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
