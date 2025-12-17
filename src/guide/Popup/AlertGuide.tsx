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
                    <br />
                    <div className="guide__desc">
                        컴포넌트명 : Alert <br />
                        Props : id | title | children | className | autoClose |
                        ...rest
                        <br />
                        Props id(string) 필수로 넘겨야 하는 값, 이 값으로 해당
                        팝업을 제어 할 수 있다.
                        <br /> Props title(string) 추가시 title 텍스트 추가됨
                        <br />
                        Props autoClose(boolean | number) 추가시 자동닫힘 /
                        숫자로 넘길시 원하는 초 뒤에 닫히게 만들 수 있다. 기본은
                        3초
                        <br />
                        <br />
                        <hr className="guide__desc-line" />
                        <br />
                        컴포넌트 Base : Popup
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
