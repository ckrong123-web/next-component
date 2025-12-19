'use client';

import React from 'react';
import Link from 'next/link';
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

export default function page() {
    return (
        <>
            <div>
                <div
                    style={{
                        padding: '30px 15px',
                        position: 'fixed',
                        top: '0',
                        display: 'flex',
                        flexDirection: 'column',
                        height: 'fit-content',
                        width: '170px',
                        gap: '10px',
                    }}
                >
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
                <div
                    style={{
                        padding: '30px 20px',
                        marginLeft: '170px',
                        borderLeft: '1px solid rgba(191, 214, 230, 0.5)',
                    }}
                >
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
