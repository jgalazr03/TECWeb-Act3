"use client";

import React, { useState } from "react";
import Button from "@/app/components/Button";

const AnotherPage: React.FC = () => {
  const [bgColor, setBgColor] = useState("bg-gray-300");

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div className={`w-64 h-32 rounded-lg transition ${bgColor}`} />

      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={() => setBgColor("bg-red-500")}
          color="bg-red-500 hover:bg-red-600"
        >
          Rojo
        </Button>
        <Button
          onClick={() => setBgColor("bg-blue-500")}
          color="bg-blue-500 hover:bg-blue-600"
        >
          Azul
        </Button>
        <Button
          onClick={() => setBgColor("bg-green-500")}
          color="bg-green-500 hover:bg-green-600"
        >
          Verde
        </Button>
        <Button
          onClick={() => setBgColor("bg-yellow-500")}
          color="bg-yellow-500 hover:bg-yellow-600"
        >
          Amarillo
        </Button>
      </div>
    </div>
  );
};

export default AnotherPage;
