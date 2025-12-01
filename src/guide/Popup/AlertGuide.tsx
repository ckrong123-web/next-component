import React from 'react';

import { Button, Alert } from '@/components';
import { useAlert } from '@/hook/useAlert';

export default function AlertGuide() {
    const { onOpen, onClose } = useAlert();
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">Alert</strong>
                <div className="guide__boxWrap guide__boxWrap--solid">
                    <div
                        style={{
                            display: 'flex',
                            gap: '0.7rem',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Button
                            type="blue"
                            onClickEvt={() => {
                                onOpen('alert_001');
                            }}
                        >
                            alert1 오픈
                        </Button>

                        <Button
                            type="blue"
                            onClickEvt={() => {
                                onOpen('alert_002');
                            }}
                        >
                            alert2 오픈
                        </Button>

                        <Button
                            type="blue"
                            onClickEvt={() => {
                                onOpen('alert_003');
                            }}
                        >
                            alert3 오픈
                        </Button>
                    </div>
                </div>
            </div>
            <Alert title="alert 1" id="alert_001" cancelTxt="취소">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </Alert>
            <Alert isNoTitle id="alert_002">
                타이틀이 없는 Alert
            </Alert>
            <Alert
                title="alert 3"
                id="alert_003"
                autoClose
                confirmTxt="3초뒤 닫혀요"
            >
                자동으로 닫히는 Alert
            </Alert>
        </>
    );
}
