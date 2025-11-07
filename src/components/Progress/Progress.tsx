import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import cn from 'classnames';

interface ProgressProps {
    percent: number;
    description?: string;
    percentTxt?: string;
    onLoad?: () => void;
    onEnd?: () => void;
}

export default function Progress({
    percent,
    description,
    percentTxt,
    onLoad,
    onEnd,
}: ProgressProps) {
    gsap.registerPlugin(useGSAP);

    const container = useRef<HTMLDivElement | null>(null);

    const aniBar = useGSAP(
        (context, contextSafe) => {
            gsap.to('.progress__bar', {
                width: `${percent}%`,
                duration: 1,
                onComplete: () => {
                    context.data.length = 0;
                    onEnd && onEnd();
                },
            });
        },
        { scope: container, dependencies: [percent] },
    );

    const footCont = (
        <>
            <div className="progress__foot">
                <div
                    className={cn('progress__foot-wrap', {
                        'progress__foot-wrap--no-desc': !description,
                    })}
                >
                    {description && (
                        <span className="progress__description">
                            {description}
                        </span>
                    )}
                    {percentTxt && (
                        <span className="progress__percent">
                            {percent}
                            {percentTxt}
                        </span>
                    )}
                </div>
            </div>
        </>
    );

    useEffect(() => {
        onLoad && onLoad();
    }, [percent, onLoad]);

    return (
        <>
            <div className="progress" ref={container}>
                <div className="progress__wrap">
                    <span className="progress__bar" />
                </div>

                {(description || percentTxt) && footCont}
            </div>
        </>
    );
}
