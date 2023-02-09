import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-full h-56 items-center justify-between">
      <h2>marieflor.dev</h2>
      <nav>
        <ul className="flex space-x-14">
          <Link href="/about">about</Link>
          <Link href="/writing">writing</Link>
          <Link href="/contact">contact</Link>
        </ul>
      </nav>
    </div>
  );
}
