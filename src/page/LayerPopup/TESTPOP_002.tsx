import React from 'react';
import { LayerPopup } from '@/components';

import { Button } from '@/components';
import { useLayerPopup } from '@/hook/useLayerPopup';

export default function TESTPOP_001() {
    const { onOpen } = useLayerPopup();
    return (
        <LayerPopup
            title="이중 테스트 팝업입니다"
            id="testpop_002"
            onCancelEvt={() => {
                console.log('cancel 누름');
            }}
            onConfirmEvt={() => {
                console.log('confirm 누름');
            }}
            cancelTxt={false}
        >
            <div style={{ height: '70vh' }}>
                <Button
                    type="blue"
                    onClickEvt={() => {
                        onOpen('testpop_001');
                    }}
                >
                    이중팝업 원해요
                </Button>
            </div>
        </LayerPopup>
    );
}
