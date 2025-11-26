import React, {
    useState,
    useRef,
    useEffect,
    createContext,
    useContext,
    ReactElement,
} from 'react';
import cn from 'classnames';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import DigitalWalletItem from './DigitalWalletItem';
import { ArrowRightIcon, DoubleDownIcon, DoubleUpIcon } from '@/icon';

interface DigitalWalletContextProps {
    length: number;
}

const DigitalWalletContext = createContext<
    DigitalWalletContextProps | undefined
>(undefined);

export function useDigitalWallet() {
    const context = useContext(DigitalWalletContext);
    if (!context) {
        throw new Error(
            'useDigitalWallet must be used within an DigitalWalletContextProvider',
        );
    }
    return context;
}

interface DigitalWalletProps {
    children?: React.ReactNode;
}

interface DigitalWalletItemProps {
    index: number;
}

export default function DigitalWallet({ children }: DigitalWalletProps) {
    const [isOpen, setIsOpen] = useState(false);
    const container = useRef<HTMLDivElement | null>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const [length, setLength] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        Array.isArray(children) ? setLength(children.length) : setLength(0);
    }, [children]);

    useEffect(() => {
        Array.isArray(children) &&
            setHeight(((children.length - 1) * 58 + 111) / 10);
    }, [children]);

    const childGroup = React.Children.map(
        children,
        (child, index) =>
            React.isValidElement(child) &&
            React.cloneElement(child as ReactElement<DigitalWalletItemProps>, {
                index,
            }),
    );

    useGSAP(
        (context, contextSafe) => {
            if (!height) return;

            tl.current = gsap
                .timeline({ paused: true })
                .to('.digitalWallet__befoCard-item--1', {
                    opacity: 0,
                    duration: 0.15,
                    ease: 'power1.in',
                })
                .to(
                    '.digitalWallet__befoCard-item--2',
                    {
                        opacity: 0,
                        duration: 0.15,
                        ease: 'power1.in',
                    },
                    '-=0.15',
                )
                .to('.digitalWallet__beforeArea', {
                    opacity: 0,
                    display: 'none',
                    duration: 0.37,
                    ease: 'power1.out',
                })
                .to(
                    '.digitalWallet__afterArea',
                    {
                        display: 'block',
                        opacity: 1,
                        duration: 0.4,
                        ease: 'power1.out',
                    },
                    '-=0.37',
                )
                .to(
                    '.digitalWallet__wrap',
                    {
                        height: `${height}rem`,
                        duration: 0.3,
                        ease: 'power1.out',
                    },
                    '-=0.37',
                )
                .from(
                    '.digitalWallet__card-item',
                    {
                        bottom: '100%',
                        y: '100%',
                        duration: 0.3,
                        ease: 'power1.out',
                    },
                    '-=0.37',
                );
        },
        {
            scope: container,
            dependencies: [height],
        },
    );

    const openEvt = () => {
        tl.current && tl.current.play();
    };

    const closeEvt = () => {
        tl.current && tl.current.reverse();
    };

    const handleClickBtn = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        if (isOpen) {
            openEvt();
        } else {
            closeEvt();
        }
    }, [isOpen]);

    return (
        <DigitalWalletContext.Provider value={{ length }}>
            <div className="digitalWallet" ref={container}>
                <div className="digitalWallet__wrap">
                    <div className="digitalWallet__beforeArea">
                        <ul className="digitalWallet__befoCard-list">
                            <li className="digitalWallet__befoCard-item digitalWallet__befoCard-item--1" />
                            <li className="digitalWallet__befoCard-item digitalWallet__befoCard-item--2" />
                            <li className="digitalWallet__befoCard-item digitalWallet__befoCard-item--3">
                                <div className="digitalWallet__befoCard-head">
                                    <span className="digitalWallet__befoCard-tit">
                                        MY CARD
                                    </span>
                                    <span className="digitalWallet__befoCard-Icon">
                                        <ArrowRightIcon />
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="digitalWallet__afterArea"
                        style={{ height: `${height}rem` }}
                    >
                        <ul className="digitalWallet__card-list">
                            {children && childGroup}
                        </ul>
                    </div>
                    <div className="digitalWallet__btnArea">
                        <button
                            type="button"
                            className={cn('digitalWallet__btn', {
                                'digitalWallet__btn--open': isOpen,
                            })}
                            onClick={handleClickBtn}
                        >
                            {!isOpen && (
                                <span className="digitalWallet__btnTxt">
                                    지갑을 펼쳐보세요
                                </span>
                            )}
                            <span className="digitalWallet__btnIcon">
                                {isOpen ? (
                                    <DoubleUpIcon blindTxt="닫기" />
                                ) : (
                                    <DoubleDownIcon blindTxt="열기" />
                                )}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </DigitalWalletContext.Provider>
    );
}

DigitalWallet.Item = DigitalWalletItem;
