import React from 'react';
import { Switch } from '@/components';

export default function SwitchGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">Switch</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <div style={{ display: 'flex', gap: '1.2rem' }}>
                            <Switch />
                            <Switch on={false} />
                        </div>
                        <div className="guide__desc">
                            컴포넌트명 : Switch
                            <br /> Props: on | onClickEvt
                            <br />
                            Props on(boolean) 기본값 true, false 전달 시 off 상태로 시작
                            <br />
                            Props onClickEvt 클릭 시 실행할 콜백 함수
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
