import React, { useState } from 'react';
import { Button } from '@/components';
import { Popup } from '@/components';

import { useLayerPopup } from '@/hook/useLayerPopup';

export default function LayerPop() {
    const [isOpen, setIsOpen] = useState(false);
    const { onOpen } = useLayerPopup(isOpen, setIsOpen);

    return (
        <>
            <div>
                <Button type="blue" onClickEvt={() => onOpen()}>
                    오픈
                </Button>
            </div>
            <Popup
                title="테스트 팝업입니다"
                id="ddd"
                isOpen={isOpen}
                setOpen={setIsOpen}
                onCancelEvt={() => {
                    console.log('cancel 누름');
                }}
                onConfirmEvt={() => {
                    console.log('confirm 누름');
                }}
            />
        </>
    );
}
