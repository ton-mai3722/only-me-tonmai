import Image from "next/image";

export const metadata = {
  title: "Home | Only Me",
  description: "Main application home with navigation"
};

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-6 py-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Home</h1>
        <p className="text-zinc-600 mt-2">ยินดีต้อนรับกลับ! ใช้ Side Menu ทางซ้ายเพื่อไปยังส่วนต่างๆ ของระบบ.</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-zinc-300 p-10 bg-zinc-50">
        <Image src="/welcome-image.png" alt="Home Illustration" width={200} height={200} />
        <p className="mt-6 text-lg text-zinc-700">นี่คือหน้า Home หลังจากผ่าน Landing page.</p>
      </div>
    </div>
  );
}
