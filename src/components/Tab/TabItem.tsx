import React from 'react';

interface TabItemProps {
    children?: React.ReactNode;
}

export default function TabItem({ children }: TabItemProps) {
    return <div className="tabCont">{children}</div>;
}
