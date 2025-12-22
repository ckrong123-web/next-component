import type { Metadata } from 'next';
import cn from 'classnames';
import { PopupProvider } from '@/context';
import { PopupRoot } from '@/layout';

import localFont from 'next/font/local';
import '@/styles/style.scss';

const basePath = process.env.NODE_ENV === 'production' ? '/next-component' : '';

export const metadata: Metadata = {
    title: '리액트 가이드',
    description: 'next + typescript',
    icons: {
        icon: `${basePath}/img/favicon.ico`,
    },
};

const notoSans = localFont({
    src: [
        {
            path: '../../public/font/NotoSans-Thin.woff2',
            weight: '100',
        },
        {
            path: '../../public/font/NotoSans-ExtraLight.woff2', // 추가
            weight: '200',
        },
        {
            path: '../../public/font/NotoSans-Light.woff2',
            weight: '300',
        },
        {
            path: '../../public/font/NotoSans-Regular.woff2',
            weight: '400',
        },
        {
            path: '../../public/font/NotoSans-Medium.woff2',
            weight: '500',
        },
        {
            path: '../../public/font/NotoSans-SemiBold.woff2', // 추가
            weight: '600',
        },
        {
            path: '../../public/font/NotoSans-Bold.woff2',
            weight: '700',
        },
        {
            path: '../../public/font/NotoSans-ExtraBold.woff2', // 추가
            weight: '800',
        },
        {
            path: '../../public/font/NotoSans-Black.woff2',
            weight: '900',
        },
    ],
    variable: '--font-noto-sans',
});

const roboto = localFont({
    src: [
        {
            path: '../../public/font/Roboto-Thin.woff2',
            weight: '100',
        },
        {
            path: '../../public/font/Roboto-ExtraLight.woff2',
            weight: '200',
        },
        {
            path: '../../public/font/Roboto-Light.woff2',
            weight: '300',
        },
        {
            path: '../../public/font/Roboto-Regular.woff2',
            weight: '400',
        },
        {
            path: '../../public/font/Roboto-Medium.woff2',
            weight: '500',
        },
        {
            path: '../../public/font/Roboto-SemiBold.woff2',
            weight: '600',
        },
        {
            path: '../../public/font/Roboto-Bold.woff2',
            weight: '700',
        },
        {
            path: '../../public/font/Roboto-ExtraBold.woff2',
            weight: '800',
        },
        {
            path: '../../public/font/Roboto-Black.woff2',
            weight: '900',
        },
    ],
    variable: '--font-roboto',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const basePath =
        process.env.NODE_ENV === 'production' ? '/next-component' : '';

    return (
        <html lang="ko" className={`${notoSans.variable} ${roboto.variable}`}>
            <body>
                <PopupProvider>
                    <div className="container">{children}</div>

                    <PopupRoot />
                </PopupProvider>
            </body>
        </html>
    );
}
