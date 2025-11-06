'use client';

import React from 'react';
import { Guide, PopupGuide } from '@/guide';
import Link from 'next/link';

export default function ButtonGuidePage() {
    return (
        <Guide title=" 팝업">
            <PopupGuide></PopupGuide>
        </Guide>
    );
}
