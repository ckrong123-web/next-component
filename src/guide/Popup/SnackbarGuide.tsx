import React from 'react';

import { Button, Snackbar } from '@/components';
import { useSnackbar } from '@/hook/useSnackbar';

export default function SnackbarGuide() {
    const { onOpen, onClose } = useSnackbar();
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">Snackbar</strong>
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
                                onOpen('snackbar_001');
                            }}
                        >
                            snackbar1 오픈
                        </Button>

                        <Button
                            type="blue"
                            onClickEvt={() => {
                                onOpen('snackbar_002');
                            }}
                        >
                            snackbar2 오픈
                        </Button>
                    </div>
                </div>
            </div>
            <Snackbar id="snackbar_001" title="Snackbar 예시입니다." />
            <Snackbar
                id="snackbar_002"
                title="Snackbar2 예시입니다."
                isTextBtn="Undo"
            />
        </>
    );
}
