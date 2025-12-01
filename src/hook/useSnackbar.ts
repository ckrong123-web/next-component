import React, { useState } from 'react';
import { usePopupContext } from '@/context/PopupProvider/PopupProvider';

export function useSnackbar() {
    const {
        snackbarList,
        setSnackbarList,
        snackbarCount,
        setSnackbarCount,
        SetDimm,
    } = usePopupContext();
    const [count, setCount] = useState(0);

    const onOpen = (value: string) => {
        if (
            !snackbarList.some(
                (item) => item.clone === `${value}_${snackbarCount}`,
            )
        ) {
            setSnackbarCount((prev) => prev + 1);
            setSnackbarList([
                ...snackbarList,
                { id: value, clone: `${value}_${snackbarCount}` },
            ]);
        }
    };

    const onClose = (value: string) => {
        setSnackbarList((prev) => prev.filter((item) => item.clone !== value));
    };

    return { onOpen, onClose };
}

export default useSnackbar;
