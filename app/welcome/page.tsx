import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Welcome | Only Me",
  description: "Landing page"
};

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-white to-zinc-100">
      <Image src="/welcome-image.png" alt="Welcome" width={240} height={240} />
      <h1 className="text-5xl font-extrabold mt-10 tracking-tight">ยินดีต้อนรับ</h1>
      <p className="mt-6 text-lg text-zinc-600 max-w-prose">
        เริ่มต้นใช้งานแอปเพื่อจัดการโปรเจกต์ของคุณได้เลย เข้าสู่หน้า Home เพื่อดู Side Menu และเนื้อหา.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-4 text-white font-semibold shadow hover:bg-zinc-800 transition-colors"
        >
          เข้าสู่ Home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-8 py-4 font-medium hover:bg-zinc-50 transition-colors"
        >
          ดู Projects
        </Link>
      </div>
    </div>
  );
}
