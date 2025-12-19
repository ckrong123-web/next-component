import React from 'react';
import Image from 'next/image';
import 'swiper/css';

import { Slide } from '@/components';

import img01 from '@img/slide01.jpg';
import img02 from '@img/slide02.jpg';
import img03 from '@img/slide03.jpg';
import img04 from '@img/slide04.jpg';
import img05 from '@img/slide05.jpg';

const imgGroup = [img01, img02, img03, img04, img05];

export default function SwiperGuide() {
    return (
        <div className="guide__box">
            <strong className="guide__head">Slide (swiper)</strong>
            <div className="guide__boxWrap">
                <span className="guide__boxName">기본</span>
                <div className="guide__boxBody">
                    <Slide>
                        {imgGroup.map((item, num) => {
                            return (
                                <Slide.Item key={num}>
                                    <Image src={item} alt="" />
                                </Slide.Item>
                            );
                        })}
                    </Slide>

                    <div className="guide__desc">
                        컴포넌트명 : Slide Props: nav | pagin | navOnly |
                        progress | className | children | ...rest <br />
                        Props nav (boolean / 기본 : true) true 시 네비게이션
                        추가
                        <br />
                        Props pagin (boolean / 기본 : true) true 시 페이징 추가
                        <br />
                        Props pagin (boolean / 기본 : true) true 시 페이징 추가
                        <br />
                        이외 props는 ...rest로 넘어감
                    </div>
                </div>
            </div>
        </div>
    );
}
