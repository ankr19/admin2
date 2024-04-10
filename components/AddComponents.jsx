import React from "react";
import { MdCancel } from "react-icons/md";
export default function AddComponents({value, updade, cancel}) {
  return (
    <div className="mt-[2px] mb-[2px] flex items-center justify-between gap-2">
      <button className="bg-cyan-400 rounded-md px-3 py-2">add</button>
      <button className="border-transparent bg-transparent text-red-500 text-center" onClick={()=>cancel(value)}>
        <MdCancel className="w-5 h-5" />
      </button>
    </div>
  );
}
