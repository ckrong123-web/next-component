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
                    <br />
                    <div className="guide__desc">
                        컴포넌트명 : Snackbar <br />
                        Props : id | title | className | autoClose | isTextBtn |
                        ...rest
                        <br />
                        Props id(string) 필수로 넘겨야 하는 값, 이 값으로 해당
                        팝업을 제어 할 수 있다.
                        <br /> Props title(string) 추가시 title 텍스트 추가됨
                        <br />
                        Props isTextBtn(string) 추가시 닫기 버튼 영역에 텍스트
                        버튼으로 생성된다
                        <br />
                        <br />
                        <hr className="guide__desc-line" />
                        <br />
                        컴포넌트 Base : Popup
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
