'use client';

import React from 'react';
import { Guide, CardGuide } from '@/guide';
import Link from 'next/link';

export default function CardGuidePage() {
    return (
        <Guide title="카드 컴포넌트">
            <CardGuide />
        </Guide>
    );
}
