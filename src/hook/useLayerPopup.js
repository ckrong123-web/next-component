import { useState, useCallback } from 'react';

export function useLayerPopup(setOpen, setIsOpen) {
    const onOpen = () => setIsOpen(true);

    const onClose = () => setIsOpen(false);

    return { onOpen, onClose };
}

export default useLayerPopup;
