import React from 'react';
import { Button, AccoButton, IconButton, Icon } from '@/components';

export default function ButtonGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">텍스트 버튼 컴포넌트</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                gap: '0.7rem',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Button
                                onClickEvt={() => {
                                    console.log('클릭');
                                }}
                            >
                                <Icon
                                    blindTxt="삭제 아이콘"
                                    icoName="ico-delete--333"
                                />
                                삭제
                            </Button>
                            <Button
                                onClickEvt={() => {
                                    console.log('클릭');
                                }}
                            >
                                <Icon
                                    blindTxt="링크 아이콘"
                                    icoName="ico-reset--333"
                                />
                                초기화
                            </Button>
                            <Button>신규</Button>
                            <Button href="/">페이지 이동</Button>
                            <Button disable>신규</Button>
                        </div>
                        <div className="guide__desc">
                            컴포넌트명 : Button <br />
                            Props : children | href | type
                            <span>( 'blue' , 'gray' , 'darkGray' )</span> |
                            disable | onClickEvt <br />
                            Props href( string ) 추가시 링크형( a )으로 생성
                            <br />
                            Props disable 추가시 disabled 상태로 생성
                            <br />
                            Props onClickEvt 으로 이벤트 넘김 시 버튼 클릭시
                            이벤트를 컴포넌트 밖에서 넘길 수 있음
                        </div>
                    </div>
                    <span className="guide__boxName">(blue)</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                gap: '0.7rem',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Button type="blue">
                                <Icon
                                    blindTxt="링크 아이콘"
                                    icoName="ico-link"
                                />
                                CHECK
                            </Button>
                            <Button type="blue">접수</Button>
                        </div>
                        <div className="guide__desc">Props type : blue</div>
                    </div>
                    <span className="guide__boxName">(gray / darkGray)</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                gap: '0.7rem',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Button type="gray">신규</Button>
                            <Button type="gray">
                                신규 <Icon icoName="ico-link--999" />
                            </Button>
                            <Button type="darkGray">신규</Button>
                            <Button type="darkGray">
                                신규 <Icon icoName="ico-link--666" />
                            </Button>
                        </div>
                        <div className="guide__desc">
                            Props type : gray ( color : #999 )<br />
                            Props type : darkGray ( color : #666 )
                        </div>
                    </div>
                </div>
            </div>
            <div className="guide__box">
                <strong className="guide__head">아이콘 버튼 컴포넌트</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                gap: '0.7rem',
                                flexWrap: 'wrap',
                            }}
                        >
                            <IconButton icoName="ico-add" tooltip="추가" />
                            <IconButton icoName="ico-remove" tooltip="제거" />
                            <IconButton
                                icoName="ico-arrowUp"
                                tooltip="위로 이동"
                            />
                            <IconButton
                                icoName="ico-arrowDown"
                                tooltip="아래로 이동"
                            />
                            <IconButton
                                icoName="ico-copy"
                                tooltip="복제"
                                tooltipBottom
                            />
                        </div>
                        <div className="guide__desc">
                            컴포넌트명 : IconButton <br />
                            Props : tableHead | icoName | tooltip |
                            tooltipBottom | onClickEvt
                            <br />
                            Props icoName( string ) 필수로 넘겨야 하는 값,
                            class값으로 넘어가서 아이콘을 불러옴
                            <br />
                            Props tooltip 추가시 툴팁 생성(기본 : 상단)
                            <br />
                            Props tooltipBottom 추가시 툴팁이 하단에서 나타남
                            (기본 : 상단)
                            <br />
                            Props onClickEvt 으로 이벤트 넘김 시 버튼 클릭시
                            이벤트를 컴포넌트 밖에서 넘길 수 있음
                        </div>
                    </div>
                </div>
            </div>
            <div className="guide__box">
                <strong className="guide__head">아코디언 버튼 컴포넌트</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                gap: '0.7rem',
                                flexWrap: 'wrap',
                            }}
                        >
                            <AccoButton />
                            <AccoButton isOpen />
                        </div>
                        <div className="guide__desc">
                            컴포넌트명 : AccoButton <br />
                            Props : inquiry | isOpen | onClickEvt
                            <br />
                            Props isOpen 추가시 오픈된 상태의 버튼으로 불러옴
                            <br />
                            Props onClickEvt 으로 이벤트 넘김 시 버튼 클릭시
                            이벤트를 컴포넌트 밖에서 넘길 수 있음
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
