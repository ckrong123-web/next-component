import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            <h2>에러 페이지 입니다!</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home 👋</Link>
        </div>
    );
}
