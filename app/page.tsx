import Link from "next/link";
import Image from "next/image";
import LiquidEther from "@/components/LiquidEther";
import SplitText from "@/components/SplitText";
import Galaxy from "@/components/Galaxy";
import ColorBends from "@/components/ColorBends";
import Orb from "@/components/Orb";
import StarBorder from "@/components/StarBorder";

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
        {/* <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
          twinkleIntensity={2}
        /> */}
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
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
          <Link href="/home">
            {" "}
            <StarBorder
              as="button"
              className="custom-class"
              color="cyan"
              speed="5s"
            >
              เข้าสู่ Home
            </StarBorder>
          </Link>

          <Link href="/projects">
            <StarBorder
              as="button"
              className="custom-class"
              color="cyan"
              speed="2s"
            >
              Projects
            </StarBorder>
          </Link>
        </div>
      </div>
    </div>
  );
}
