import React, { useId } from 'react';
import Select from 'react-select';

interface SelectOption {
    value: string;
    label: string;
}
interface SelectProps {
    options: SelectOption[];
    isSearch?: boolean;
    placeholder?: string;
    id?: string;
    [key: string]: any;
}

export default function SelectBox({
    options,
    isSearch = false,
    placeholder = '값을 선택해주세요.',
    id,
    ...rest
}: SelectProps) {
    const makeId = useId();
    return (
        <>
            <div className="selectbox">
                <Select
                    classNamePrefix="selectbox-select"
                    noOptionsMessage={() => '선택할 수 있는 옵션이 없습니다.'}
                    options={options}
                    isSearchable={isSearch}
                    placeholder={placeholder}
                    // menuIsOpen : 메뉴 항상 오픈 옵션
                    components={{
                        IndicatorSeparator: null,
                    }}
                    id={id ? id : makeId}
                    {...rest}
                />
            </div>
        </>
    );
}
