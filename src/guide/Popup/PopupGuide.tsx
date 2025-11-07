import React, { useEffect } from 'react';
import { LayerPop } from '@/page';

export default function PopupGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">POPUP</strong>
                <div className="guide__boxWrap guide__boxWrap--solid">
                    <LayerPop />
                </div>
            </div>
        </>
    );
}
