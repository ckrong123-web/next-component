import React from 'react';
import { DigitalWallet } from '@/components';

const itemList = [
    { tit: '전주사랑상품권', href: '#', background: '#5979FF' },
    {
        tit: '제로페이',
        onClick: () => {
            console.log('클릭');
        },
        background: '#182888',
    },
    { tit: 'NFT', href: '#', background: '#1DBBD0' },
    { tit: '스마트 ATM 출금', href: '#', background: '#A162F7' },
    { tit: '쿠폰함', txt: '10개', href: '#', background: '#579EFF' },
    { tit: 'J Money', txt: '9,800원', href: '#', background: '#515961' },
    { tit: '모바일운전면허증', href: '#' },
];

export default function DigitalWalletGuideGuide() {
    return (
        <div className="guide__box">
            <strong className="guide__head">DigitalWallet</strong>
            <div className="guide__boxWrap">
                <span className="guide__boxName">
                    gsap를 활용한 애니메이션 예제용
                </span>
                <div className="guide__boxBody">
                    <DigitalWallet>
                        {itemList.map((item, num) => {
                            return (
                                <DigitalWallet.Item
                                    key={num}
                                    tit={item.tit}
                                    txt={item.txt}
                                    href={item.href}
                                    background={item.background}
                                    onClickEvt={item.onClick}
                                />
                            );
                        })}
                    </DigitalWallet>

                    <div className="guide__desc">
                        컴포넌트명 : DigitalWallet Props: children |
                        <br />
                        서브컴포넌트 : DigitalWallet.Item (Props : index | tit |
                        txt | href | background | onClickEvt)
                        <br />
                        DigitalWallet.Item Props index, 부모에서 자동으로 자식들
                        중에서 순번을 세겨 넘기므로 지정해도 의미없음
                        <br />
                        DigitalWallet.Item Props tit(string) 추가시 카드 좌측
                        제목 지정
                        <br />
                        DigitalWallet.Item Props txt(string) 추가시 카드 우측
                        텍스트 지정
                        <br />
                        DigitalWallet.Item Props href(string) 추가시 카드가
                        링크형으로 생성 / 없을시 button으로 생성됨
                        <br />
                        DigitalWallet.Item Props background(string) 추가시
                        카드의 배경색상을 지정할 수 있음 / 지정 안할 시 기본값
                        #0260eb
                        <br />
                        Props onClickEvt 으로 이벤트 넘김 시 버튼 클릭시
                        이벤트를 컴포넌트 밖에서 넘길 수 있음
                    </div>
                </div>
            </div>
        </div>
    );
}
