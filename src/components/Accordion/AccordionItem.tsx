import React, { useState, useEffect } from 'react';
import { useAccordion } from './Accordion';
import { AccoButton } from '@/components';
import cn from 'classnames';

import { AnimatePresence, motion } from 'motion/react';

interface AccordionItemProps {
    index?: number;
    isOpen?: boolean;
    title?: string;
    children?: React.ReactNode;
}

export default function AccordionItem({
    index,
    isOpen = false,
    title,
    children,
}: AccordionItemProps) {
    const { multi, activeNum, setActiveNum } = useAccordion();
    const [open, setOpen] = useState(isOpen);

    const openToggleEvt = () => {
        multi
            ? setOpen((prev) => !prev)
            : setActiveNum((prev) => (prev !== index ? index : undefined));
    };

    useEffect(() => {
        !multi && isOpen && setActiveNum(index);
    }, [index, isOpen, multi, setActiveNum, activeNum]);

    useEffect(() => {
        if (!multi) {
            activeNum === index ? setOpen(true) : setOpen(false);
        }
    }, [activeNum, index, multi, setOpen, open]);

    return (
        <li className="accordion__item">
            <div
                className={cn('accordion-item', {
                    'accordion-item--active': open,
                })}
            >
                <div className="accordion-item__head">
                    {title && (
                        <span className="accordion-item__title">{title}</span>
                    )}
                    <div className="accordion-item__btn">
                        <AccoButton
                            isOpen={open}
                            onClickEvt={() => {
                                openToggleEvt();
                            }}
                        />
                    </div>
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            style={{ overflow: 'hidden' }}
                        >
                            <div className="accordion-item__body">
                                {children}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </li>
    );
}
