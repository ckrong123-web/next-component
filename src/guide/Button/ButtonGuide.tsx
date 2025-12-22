import React from 'react';
import { Button, AccoButton, IconButton } from '@/components';
import {
    AddIcon,
    RemoveIcon,
    ArrowUpIcon,
    ArrowDownIcon,
    CopyIcon,
    DeleteIcon,
    LinkIcon,
    ResetIcon,
} from '@/icon';

export default function ButtonGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">Text Button</strong>
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
                                <DeleteIcon />
                                삭제
                            </Button>
                            <Button
                                onClickEvt={() => {
                                    console.log('클릭');
                                }}
                            >
                                <ResetIcon />
                                초기화
                            </Button>
                            <Button>신규</Button>
                            <Button href="/">페이지 이동</Button>
                            <Button disable>신규</Button>
                        </div>
                        <div className="guide__desc">
                            컴포넌트명 : Button <br />
                            Props : children | href | type
                            <span>
                                ( &apos;blue&apos; , &apos;gray&apos; ,
                                &apos;darkGray&apos; )
                            </span>{' '}
                            | disable | onClickEvt <br />
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
                                <LinkIcon />
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
                                신규 <LinkIcon />
                            </Button>
                            <Button type="darkGray">신규</Button>
                            <Button type="darkGray">
                                신규
                                <LinkIcon />
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
                <strong className="guide__head">Icon Button</strong>
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
                            <IconButton tooltip="추가">
                                <AddIcon />
                            </IconButton>
                            <IconButton tooltip="제거">
                                <RemoveIcon />
                            </IconButton>
                            <IconButton tooltip="위로 이동">
                                <ArrowUpIcon />
                            </IconButton>
                            <IconButton
                                tooltip="아래로 이동"
                                tooltipLocationAuto
                            >
                                <ArrowDownIcon />
                            </IconButton>
                            <IconButton tooltip="복제" tooltipBottom>
                                <CopyIcon />
                            </IconButton>
                        </div>
                        <div className="guide__desc">
                            컴포넌트명 : IconButton <br />
                            Props : icon | tooltip | tooltipBottom |
                            tooltipLocationAuto | onClickEvt
                            <br />
                            Props icon( ReactNode ) 필수로 넘겨야 하는 값,
                            아이콘 컴포넌트를 집어넣는다.
                            <br />
                            Props tooltip 추가시 툴팁 생성(기본 : 상단)
                            <br />
                            Props tooltipBottom 추가시 툴팁이 하단에서 나타남
                            (기본 : 상단)
                            <br />
                            Props tooltipLocationAuto 추가시 툴팁의 위치가
                            뷰포트상 위치에 따라 자동으로 상단 혹은 하단으로
                            계산됨
                            <br />
                            Props onClickEvt 으로 이벤트 넘김 시 버튼 클릭시
                            이벤트를 컴포넌트 밖에서 넘길 수 있음
                        </div>
                    </div>
                </div>
            </div>
            <div className="guide__box">
                <strong className="guide__head">Accordion Button</strong>
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
