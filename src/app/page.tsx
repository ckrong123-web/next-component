'use client';

import React from 'react';
import Link from 'next/link';
import {
    Guide,
    // Popupguide,
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
} from '@/guide';

const listData = [
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
];

export default function page() {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div
                    style={{
                        padding: '30px 15px',
                        position: 'sticky',
                        top: '0',
                        display: 'flex',
                        flexDirection: 'column',
                        height: 'fit-content',
                        flexBasis: '170px',
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
                        flexGrow: '1',
                        flexShrink: '1',
                        gap: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        borderLeft: '1px solid rgba(191, 214, 230, 0.5)',
                    }}
                >
                    <div>{/* <Popupguide /> */}</div>
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
