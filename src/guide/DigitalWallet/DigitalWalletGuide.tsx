import React from 'react';
import { DigitalWallet } from '@/components';

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
                        <DigitalWallet.Item
                            tit="전주사랑상품권"
                            href="#"
                            background="#5979FF"
                        />
                        <DigitalWallet.Item
                            tit="제로페이"
                            href="#"
                            background="#182888"
                        />
                        <DigitalWallet.Item
                            tit="NFT"
                            href="#"
                            background="#1DBBD0"
                        />
                        <DigitalWallet.Item
                            tit="스마트 ATM 출금"
                            href="#"
                            background="#A162F7"
                        />
                        <DigitalWallet.Item
                            tit="쿠폰함"
                            txt="10개"
                            href="#"
                            background="#579EFF"
                        />
                        <DigitalWallet.Item
                            tit="J Money"
                            txt="9,800원"
                            href="#"
                            background="#515961"
                        />
                        <DigitalWallet.Item
                            tit="모바일운전면허증"
                            href="#"
                            background="#0565F0"
                        />
                    </DigitalWallet>

                    <div className="guide__desc">
                        {/* 컴포넌트명 : Stepper Props: children | disable | max |
                        defaultValue | className
                        <br />
                        서브컴포넌트 : Stepper.Input (Props : placeholder |
                        ...rest ),
                        <br /> Stepper.Btn ( Props: count
                        <span>( 'down' , 'up' )</span> | num )
                        <br />
                        <br />
                        Props max(number) 추가시 최대값 지정 가능, 기본값은 999
                        <br />
                        Props defaultValue(number) 추가시 기본 value 지정가능
                        <br />
                        Props className(string) 추가시 최소값 설정
                        <br />
                        <br />
                        Stepper.Input Props placeholder(string) 추가시
                        placeholder 지정 가능, 기본값은 '000'
                        <br />
                        이외 props는 ...rest로 input에 넘어감
                        <br />
                        <br />
                        Stepper.Btn Props count:<span>'down'</span> = 감소 버튼,
                        최소값일때 비활성화
                        <br />
                        Stepper.Btn Props count:<span>'up'</span> = 증가 버튼,
                        최대값일때 비활성화
                        <br />
                        Stepper.Btn Props num: 증가 or 감소 치 지정, 기본값은 1 */}
                    </div>
                </div>
            </div>
        </div>
    );
}
