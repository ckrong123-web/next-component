import React from 'react';
import { Card } from '@/components';

import cardData from '@img/card_img.jpg';

export default function CardGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">Card</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'stretch',
                                gap: '0.7rem',
                            }}
                        >
                            <Card title="title" subTitle="sub">
                                콘텐츠
                            </Card>
                            <Card href="#" title="title" img={cardData}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </Card>
                        </div>
                        <div className="guide__desc">
                            컴포넌트명 : Card
                            <br />
                            Props: href | title | subTitle | children | img
                            <br />
                            Props img 이미지 영역에 이미지 추가, 이미지를 넣지
                            않으면 기본이미지 노출
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
