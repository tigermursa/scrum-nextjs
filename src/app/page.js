import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4">
        <Link href={"/client-fetching"} className="btn1">Client Fetching </Link>
        <Link href={"/server-fetching"} className="btn2">server Fetching </Link>
        <Link href={"/topics"} className="btn2">Topics</Link>
      </div>
    </main>
  );
}
