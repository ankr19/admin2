"use client";
import Image from "next/image";
import React from "react";
import { sendMailer } from "@/lib/email";
import AddComponents from "@/components/AddComponents";

export default function Home() {
  const [add, setAdd] = React.useState([0]);
  const handleSend = async () => {
    await sendMailer("value");
  };

  const handleCancel = (val) => {
    // console.log(val);
    const newArray = [...add.slice(0, val), ...add.slice(val + 1)];
    // console.log(newArray)
    setAdd(newArray)
  };

  const handleClick = () => {
    setAdd([...add, add.length + 1]);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={handleSend}
        className="bg-blue-500 py-3 px-4 rounded-md text-white"
      >
        Send mail
      </button>

      <button
        onClick={handleClick}
        className="bg-green-500 rounded-md px-3 py-2"
      >
        Add Components
      </button>
      <div className="flex flex-row gap-3">
        {add.map((add, index) => (
          <AddComponents key={index} value={index} cancel={handleCancel} />
        ))}
      </div>
    </main>
  );
}
