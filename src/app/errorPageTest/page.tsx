import { notFound } from 'next/navigation';
export default function ErrorPageTest() {
    notFound();
    return <h1>에러 페이지 테스트 😎</h1>;
}
