import React, { useEffect } from 'react';

import { Button } from '@/components';
import { useLayerPopup } from '@/hook/useLayerPopup';

import { TESTPOP_001, TESTPOP_002 } from '@/page/LayerPopup';

export default function LayerPopGuide() {
    const { onOpen, onClose } = useLayerPopup();
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">LAYER POPUP</strong>
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
                                onOpen('testpop_001');
                            }}
                        >
                            팝업1 오픈
                        </Button>

                        <Button
                            type="blue"
                            onClickEvt={() => {
                                onOpen('testpop_002');
                            }}
                        >
                            팝업2 오픈
                        </Button>
                    </div>
                    <br />
                    <div className="guide__desc">
                        컴포넌트명 : LayerPoup <br />
                        Props : id | title | className | children
                        <br />
                        Props id(string) 필수로 넘겨야 하는 값, 이 값으로 해당
                        팝업을 제어 할 수 있다.
                        <br />
                        Props title(string) 추가시 title 텍스트 추가됨
                        <br />
                        <br />
                        <hr className="guide__desc-line" />
                        <br />
                        컴포넌트 Base : Popup
                        <br />
                        Props : id | name | className | title | children |
                        cancelTxt | confirmTxt | customFoot | isNoFooter |
                        onCancelEvt | onConfirmEvt
                        <br />
                        id(string) 필수로 넘겨야 하는 값, 이 값으로 해당 팝업을
                        제어 할 수 있다.
                        <br />
                        name(string) 필수로 넘겨야 하는 값, 이 값으로 popup 내부
                        classname이 작성됨, 기본값은 'popup'
                        <br />
                        title(string) 추가시 title 텍스트 추가됨
                        <br />
                        cancelTxt(string | false) 추가시 부정 텍스트 수정 / 삭제
                        가능
                        <br />
                        confirmTxt(string | false) 추가시 긍정 텍스트 수정 /
                        삭제 가능
                        <br />
                        customFoot 으로 foot 영역 커스텀 가능
                        <br />
                        isNoFooter 추가시 foot 영역 삭제
                        <br />
                        onCancelEvt 으로 이벤트 넘김 시 부정 버튼 클릭시
                        이벤트를 컴포넌트 밖에서 넘길 수 있음
                        <br />
                        onConfirmEvt 으로 이벤트 넘김 시 긍정 버튼 클릭시
                        이벤트를 컴포넌트 밖에서 넘길 수 있음
                    </div>
                </div>
                <TESTPOP_001 />
                <TESTPOP_002 />
            </div>
        </>
    );
}
