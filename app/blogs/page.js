import Link from "next/link";

export default function PageList() {
  return (
    <>
      <p>
        <Link href="blogs/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="blogs/post-2">Post 2</Link>
      </p>
    </>
  );
}
