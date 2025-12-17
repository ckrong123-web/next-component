import React from 'react';
import { Accordion, AccoButton } from '@/components';

export default function AccordionGuide() {
    return (
        <div className="guide__box">
            <strong className="guide__head">Accordion</strong>
            <div className="guide__boxWrap">
                <span className="guide__boxName">기본</span>
                <div className="guide__boxBody">
                    <Accordion>
                        <Accordion.Item title="0번 타이틀">
                            보여요 0번
                        </Accordion.Item>
                        <Accordion.Item title="1번 타이틀">
                            보여요 1번
                        </Accordion.Item>
                        <Accordion.Item title="2번 타이틀">
                            보여요 2번
                        </Accordion.Item>
                    </Accordion>
                    <div className="guide__desc">
                        컴포넌트명 : Accordion
                        <br /> Props: isMulti | children
                        <br />
                        서브컴포넌트 : Accordion.Item (Props : index | isOpen |
                        title | children)
                        <br />
                        Accordion.Item Props index, 부모에서 자동으로 자식들
                        중에서 순번을 세겨 넘기므로 지정해도 의미없음
                        <br />
                        Accordion.Item Props title, 버튼 왼쪽으로 타이틀
                        텍스트를 지정할 수 있음
                    </div>
                </div>
                <span className="guide__boxName">isMulti & isOpen</span>
                <div className="guide__boxBody">
                    <Accordion isMulti>
                        <Accordion.Item isOpen title="0번 타이틀">
                            보여요 0번
                        </Accordion.Item>
                        <Accordion.Item isOpen title="1번 타이틀">
                            보여요 1번
                        </Accordion.Item>
                        <Accordion.Item title="2번 타이틀">
                            보여요 2번
                        </Accordion.Item>
                    </Accordion>
                    <div className="guide__desc">
                        isMulti 추가시 여러개 동시 오픈 가능 / 기본값은 false
                        <br />
                        Accordion.Item Props isOpen, 맨처음 default 상태를
                        열림상태로 시작
                    </div>
                </div>
            </div>
        </div>
    );
}
