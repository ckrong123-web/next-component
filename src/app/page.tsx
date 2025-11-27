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
} from '@/guide';

const listData = [
    { compnent: 'Popup', guide: <PopupGuide /> },
    { compnent: 'Button', guide: <ButtonGuide /> },
    { compnent: 'Input', guide: <InputGuide /> },
    { compnent: 'Tab', guide: <TabGuide /> },
    { compnent: 'Radio', guide: <RadioGuide /> },
    { compnent: 'Slider', guide: <SliderGuide /> },
    { compnent: 'SelectBox', guide: <SelectBoxGuide /> },
    { compnent: 'Swiper', name: 'Slide (swiper)', guide: <SwiperGuide /> },
    { compnent: 'Stepper', guide: <StepperGuide /> },
    { compnent: 'Progress', guide: <ProgressGuide /> },
    { compnent: 'Icon', guide: <IconGuide /> },
    { compnent: 'DigitalWallet', guide: <DigitalWalletGuide /> },
    { compnent: 'Accordion', guide: <AccordionGuide /> },
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
