"use client";

import React, { useState } from "react";
import Button from "@/app/components/Button";

const Page: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-4xl font-bold mb-4">{count}</h1>
      <Button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 hover:bg-blue-600"
      >
        Incrementar
      </Button>
      <Button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 hover:bg-red-600"
      >
        Decrenentar
      </Button>
    </div>
  );
};

export default Page;
