import React from 'react';
import { Tab } from '@/components';

export default function TabGuide() {
    const TabTitList = ['TEXT1', 'TEXT2', 'TEXT3'];
    const TabTitList2 = ['타이틀1', '타이틀2', '타이틀3'];
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">TAB</strong>
                <div className="guide__boxWrap guide__boxWrap--solid">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <Tab tabTitle={TabTitList}>
                            <Tab.Item>탭아이템1</Tab.Item>
                            <Tab.Item>탭아이템2</Tab.Item>
                            <Tab.Item>탭아이템3</Tab.Item>
                        </Tab>
                        <div className="guide__desc">
                            컴포넌트명 : Tab <br />
                            Props : roundType | children | tabTitle | actNum |
                            onClickEvt
                            <br />
                            Props roundType 추가시 disabled 상태로 생성
                            <br />
                            Props tabTitle( string[] ) 필수로 넘겨야 하는 값,
                            배열로 넘겨서 리스트 버튼을 생성
                            <br />
                            Props actNum( number ) 추가시 디폴트 액티브 순서
                            변경, 넘기지 않은 기본형은 첫번째로 고정
                            <br />
                            Props onClickEvt 으로 이벤트 넘김 시 버튼 클릭시
                            이벤트를 컴포넌트 밖에서 넘길 수 있음
                        </div>
                    </div>
                    <span className="guide__boxName">라운드형</span>
                    <div className="guide__boxBody">
                        <Tab tabTitle={TabTitList2} roundType>
                            <Tab.Item>탭아이템1</Tab.Item>
                            <Tab.Item>탭아이템2</Tab.Item>
                            <Tab.Item>탭아이템3</Tab.Item>
                        </Tab>
                        <div className="guide__desc">
                            Props : roundType ( 라운드 타입 )
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
