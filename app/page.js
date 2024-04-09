"use client"
import Image from "next/image";
import { sendMailer } from "@/lib/email";

export default function Home() {
  const handleSend = async () => {
    await sendMailer("value");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={handleSend}
        className="bg-blue-500 py-3 px-4 rounded-md text-white"
      >
        Send mail
      </button>
    </main>
  );
}
