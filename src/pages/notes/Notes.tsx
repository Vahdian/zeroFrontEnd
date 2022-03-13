import React, { useEffect, useState } from "react";
import { API, APIlocal } from "../../shared/consts/api.const";

export default function Notes() {
  const [notes, setnotes] = useState([]);

  const getNotes = () => {
    APIlocal.get("/notes").then((res: any) => {
      console.log(res.data);
      setnotes(res.data);
    });
    console.log("whatsup");
  };
  useEffect(getNotes, []);
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black flex flex-wrap p-8 flex-row row-span-2 gap-2 justify-between">
      {notes.map((note: any) => 
        <div className="bg-gray-800 rounded-md w-full p-4 h-40 overflow-y-scroll">
          <div className="text-white font-bold">{note.title}</div>
          <div className="text-sm text-white">{note.content}</div>
        </div>
      )}
    </div>
  );
}
