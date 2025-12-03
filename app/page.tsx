import Link from "next/link";
import Image from "next/image";
import LiquidEther from "@/components/LiquidEther";
import Galaxy from "@/components/Galaxy";

export const metadata = {
  title: "Welcome | Only Me",
  description: "Landing page",
};

export default function Landing() {
  return (
    <div className="relative w-full h-screen bg-black">
      <div className="absolute inset-0 z-0">
        {/* <LiquidEther
          colors={["#110b11", "#B4F400", "#859A87"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.2}
        /> */}
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
          twinkleIntensity={2}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
        <Image
          src="/welcome-image.png"
          alt="Welcome"
          width={240}
          height={240}
        />
        <h1 className="text-5xl font-extrabold mt-10 tracking-tight text-white">
          ยินดีต้อนรับ
        </h1>
        <p className="mt-6 text-lg text-gray-200 max-w-prose">
          เริ่มต้นใช้งานแอปเพื่อจัดการโปรเจกต์ของคุณได้เลย เข้าสู่หน้า Home
          เพื่อดู Side Menu และเนื้อหา.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/home"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-black font-semibold shadow hover:bg-gray-200 transition-colors"
          >
            เข้าสู่ Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-8 py-4 font-medium text-white hover:bg-white hover:text-black transition-colors"
          >
            ดู Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
