import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-full px-44 py-12 absolute top-0 left-0">
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
