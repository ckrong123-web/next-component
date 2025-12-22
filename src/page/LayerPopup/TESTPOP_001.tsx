import React from 'react';
import { LayerPopup } from '@/components';

export default function TESTPOP_001() {
    return (
        <LayerPopup
            title="테스트 팝업입니다"
            id="testpop_001"
            onCancelEvt={() => {
                console.log('cancel 누름');
            }}
            onConfirmEvt={() => {
                console.log('confirm 누름');
            }}
        >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
        </LayerPopup>
    );
}
