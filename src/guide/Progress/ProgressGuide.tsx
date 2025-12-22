import React, { useState } from 'react';
import { Progress, Input } from '@/components';

export default function ProgressGuide() {
    const [myPercent, myPercentState] = useState(0);
    const [descTxt, descTxtState] = useState('로딩 중');

    const thisNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);

        if (!isNaN(value)) {
            if (0 >= value) {
                myPercentState(0);
                descTxtState('로딩 중');
            } else if (value >= 100) {
                myPercentState(100);
                descTxtState('로딩 완료');
            } else {
                myPercentState(value);
                descTxtState('로딩 중');
            }
        }
    };

    return (
        <div className="guide__box">
            <strong className="guide__head">Progress</strong>
            <div className="guide__boxWrap">
                <span className="guide__boxName">기본</span>
                <div className="guide__boxBody">
                    <Progress percent={100} />
                    <div className="guide__desc">
                        컴포넌트명 : Progress <br />
                        Props : percent | description | percentTxt | onLoad |
                        onEnd
                        <br />
                        Props percent( number ) 필수로 넘겨야 하는 값
                        <br />
                        Props description( string ) 추가시 하단 왼쪽에 텍스트
                        추가됨
                        <br />
                        Props percentTxt( string ) 추가시 하단 오른쪽에 percet +
                        percentTxt 텍스트 추가됨
                        <br />
                        Props onLoad 으로 이벤트 넘김 시 progress 애니메이션이
                        시작 시 이벤트를 컴포넌트 밖에서 넘길 수 있음
                        <br />
                        Props onEnd 으로 이벤트 넘김 시 progress 애니메이션이
                        끝났을 시 이벤트를 컴포넌트 밖에서 넘길 수 있음
                    </div>
                </div>
                <span className="guide__boxName">값 보내기 테스트</span>
                <div className="guide__boxBody">
                    <Progress
                        percent={myPercent}
                        description={descTxt}
                        percentTxt="%"
                        onLoad={() => console.log('애니메이션 시작')}
                        onEnd={() => console.log('애니메이션 완료')}
                    />
                    <div className="guide__boxWrap guide__boxWrap--solid">
                        값 입력시 로딩에 적용 됨
                        <br />
                        <br />
                        <Input
                            type="number"
                            onChange={thisNum}
                            value={myPercent}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
