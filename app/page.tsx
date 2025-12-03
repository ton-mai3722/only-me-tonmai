import Link from "next/link";
import Image from "next/image";
import LiquidEther from "@/components/LiquidEther";
import SplitText from "@/components/SplitText";
import Galaxy from "@/components/Galaxy";
import ColorBends from "@/components/ColorBends";

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
        <SplitText
          text="Hello, Everyone!"
          className="text-[120px] font-semibold text-center text-amber-50"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        <div className="mt-20 flex flex-col sm:flex-row gap-4">
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
