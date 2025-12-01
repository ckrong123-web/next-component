import { usePopupContext } from '@/context/PopupProvider/PopupProvider';

export function useAlert() {
    const { popupList, setPopupList, SetDimm } = usePopupContext();

    const onOpen = (value: string) => {
        if (!popupList.includes(value)) {
            setPopupList([...popupList, value]);
            SetDimm(true);
        }
    };

    const onClose = (value: string) => {
        if (popupList.includes(value)) {
            setPopupList(popupList.filter((item) => item !== value));
        }
    };

    return { onOpen, onClose };
}

export default useAlert;
