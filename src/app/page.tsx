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
} from '@/guide';

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
                    <Link href="/popup">Popup</Link>
                    <Link href="/button">Button</Link>
                    <Link href="/input">Input</Link>
                    <Link href="/tab">Tab</Link>
                    <Link href="/radio">Radio</Link>
                    <Link href="/slider">Slider</Link>
                    <Link href="/selectbox">SelectBox</Link>
                    <Link href="/swiper">Slide (swiper)</Link>
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
                    <div>
                        <ButtonGuide />
                    </div>
                    <div>
                        <InputGuide />
                    </div>
                    <div>
                        <TabGuide />
                    </div>
                    <div>
                        <RadioGuide />
                    </div>
                    <div>
                        <SliderGuide />
                    </div>
                    <div>
                        <SelectBoxGuide />
                    </div>
                    <div>
                        <SwiperGuide />
                    </div>
                </div>
            </div>
        </>
    );
}
