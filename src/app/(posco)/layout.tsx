import React from 'react';

export default function PoscoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="wrap">{children}</div>;
}
