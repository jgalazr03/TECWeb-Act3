"use client";

import React, { useState } from "react";
import RegisterForm from "@/app/components/RegisterForm";

const RegisterPage: React.FC = () => {
  const [registeredUser, setRegisteredUser] = useState<string | null>(null);

  return (
    <div className="h-screen flex flex-col items-center justify-center relative">
      {registeredUser && (
        <div className="absolute top-4 right-4 bg-gray-800 px-4 py-2 rounded-lg text-white font-bold shadow">
          Registrado: {registeredUser}
        </div>
      )}

      <RegisterForm onRegister={setRegisteredUser} />
    </div>
  );
};

export default RegisterPage;
