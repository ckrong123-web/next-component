import React from 'react';
import { Segment } from '@/components';

export default function SegmentGuide() {
    const SegmentList = ['TEXT1', 'TEXT2', 'TEXT3'];

    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">Segmented Control</strong>
                <div className="guide__boxWrap">
                    <div className="guide__boxBody">
                        <Segment
                            items={SegmentList}
                            onClickEvt={() => console.log('클릭')}
                        />
                        <div className="guide__desc">
                            컴포넌트명 : Segment
                            <br />
                            Props : items | actNum
                            <br />
                            Props items( string[] ) 필수로 넘겨야 하는 값, 항목
                            텍스트 배열을 넘긴다.
                            <br />
                            Props actNum( number ) 초기 선택 항목 인덱스 설정 (
                            기본값 : 0 ) <br />
                            Props onClickEvt 으로 이벤트 넘김 시 버튼 클릭시
                            이벤트를 컴포넌트 밖에서 넘길 수 있음
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
