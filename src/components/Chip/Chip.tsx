import React, { useState } from 'react';
import cn from 'classnames';

import { AnimatePresence, motion } from 'motion/react';

import Image, { StaticImageData } from 'next/image';
import { CloseIcon } from '@/icon';

import noData from '@img/profile.jpg';

interface ChipProps {
    img?: string | StaticImageData;
    icon?: React.ReactNode;
    isProfile?: boolean;
    noBtn?: boolean;
    children?: React.ReactNode;
    [key: string]: any;
}

export default function Chip({
    img,
    icon,
    isProfile,
    noBtn,
    children,
    ...rest
}: ChipProps) {
    const [close, setClose] = useState(false);

    return (
        <AnimatePresence>
            {!close && (
                <motion.div
                    className={cn('chip', {
                        'chip--img': isProfile || icon,
                    })}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.2,
                    }}
                >
                    <div className="chip__wrap">
                        {isProfile && (
                            <div className="chip__img">
                                <Image src={img ? img : noData} alt="" />
                            </div>
                        )}
                        {icon && <div className="chip__icon">{icon}</div>}
                        <span className="chip__txt">{children}</span>
                        {!noBtn && (
                            <button
                                className="chip__btn"
                                onClick={() => {
                                    setClose(true);
                                }}
                            >
                                <CloseIcon />
                                <span className="blind">삭제</span>
                            </button>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
