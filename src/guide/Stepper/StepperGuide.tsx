import React from 'react';
import { Stepper } from '@/components';

export default function StepperGuide() {
    return (
        <div className="guide__box">
            <strong className="guide__head">Stepper</strong>
            <div className="guide__boxWrap">
                <span className="guide__boxName">기본</span>
                <div className="guide__boxBody">
                    <Stepper>
                        <Stepper.Btn count="down" />
                        <Stepper.Input name="StepperInputName01" />
                        <Stepper.Btn count="up" />
                    </Stepper>
                    <br />
                    <Stepper defaultValue={3}>
                        <Stepper.Input name="StepperInputName01" />
                        <Stepper.Btn count="down" />
                        <Stepper.Btn count="up" />
                    </Stepper>
                    <br />
                    <Stepper max={10}>
                        <Stepper.Input name="StepperInputName01" />
                        <Stepper.Btn count="up" />
                    </Stepper>

                    <div className="guide__desc">
                        컴포넌트명 : Stepper Props: children | disable | max |
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
                        Stepper.Btn Props num: 증가 or 감소 치 지정, 기본값은 1
                    </div>
                </div>
                <span className="guide__boxName">비활성화</span>
                <div className="guide__boxBody">
                    <Stepper disable>
                        <Stepper.Btn count="down" />
                        <Stepper.Input name="StepperInputName02" />
                        <Stepper.Btn count="up" />
                    </Stepper>

                    <div className="guide__desc">
                        Props : disable ( 비활성화 )
                    </div>
                </div>
            </div>
        </div>
    );
}
