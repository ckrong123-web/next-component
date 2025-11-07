import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import cn from 'classnames';
import StepperInput from './StepperInput';
import StepperBtn from './StepperBtn';

interface StepperContextProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    disable?: boolean;
}

const StepperContext = createContext<StepperContextProps | undefined>(
    undefined,
);

export function useStepper() {
    const context = useContext(StepperContext);
    if (!context) {
        throw new Error(
            'useStepper must be used within an StepperContextProvider',
        );
    }
    return context;
}

interface StepperProps {
    children?: ReactNode;
    disable?: boolean;
    max?: number;
    defaultValue?: number;
    className?: string;
}

export default function Stepper({
    children,
    disable,
    max = 999,
    defaultValue,
    className,
}: StepperProps) {
    const [value, setValue] = useState<string>(
        defaultValue ? `${defaultValue}` : '',
    );
    const [isFocus, setIsFocus] = useState<boolean>(false);

    useEffect(() => {
        if (Number(value) < 0) {
            setValue('0');
        } else if (Number(value) > max) {
            setValue(`${max}`);
        }
    }, [value]);

    const isFocusing = () => {
        !disable && setIsFocus(true);
    };

    const isBluring = () => {
        !disable && setIsFocus(false);
    };

    return (
        <StepperContext.Provider value={{ value, setValue, disable }}>
            <div
                className={cn('stepper', className)}
                onFocus={isFocusing}
                onBlur={isBluring}
            >
                <div
                    className={cn('stepper__wrap', {
                        'stepper__wrap--focus': isFocus,
                        'stepper__wrap--disable': disable,
                    })}
                >
                    {children}
                </div>
            </div>
        </StepperContext.Provider>
    );
}

Stepper.Input = StepperInput;
Stepper.Btn = StepperBtn;
