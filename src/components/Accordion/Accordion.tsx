import React, {
    Children,
    createContext,
    useContext,
    useState,
    ReactElement,
} from 'react';
import AccordionItem from './AccordionItem';

interface AccordionContextProps {
    multi: boolean;
    activeNum: number | undefined;
    setActiveNum: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(
    undefined,
);

export function useAccordion() {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error(
            'useAccordion must be used within an AccordionContextProvider',
        );
    }
    return context;
}

interface AccordionProps {
    isMulti?: boolean;
    children: React.ReactNode;
}

interface AccordionItemProps {
    index: number;
}

export default function Accordion({
    isMulti = false,
    children,
}: AccordionProps) {
    const multi = isMulti;
    const [activeNum, setActiveNum] = useState<number | undefined>(undefined);

    return (
        <AccordionContext.Provider value={{ multi, activeNum, setActiveNum }}>
            <div className="accordion">
                <ul className="accordion__list">
                    {Children.map(children, (child, index) =>
                        React.isValidElement(child)
                            ? React.cloneElement(
                                  child as ReactElement<AccordionItemProps>,
                                  {
                                      index,
                                  },
                              )
                            : null,
                    )}
                </ul>
            </div>
        </AccordionContext.Provider>
    );
}

Accordion.Item = AccordionItem;
