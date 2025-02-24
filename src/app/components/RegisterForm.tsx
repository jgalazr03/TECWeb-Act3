"use client";

import React, { useState } from "react";
import Button from "@/app/components/Button";

const RegisterForm: React.FC<{ onRegister: (name: string) => void }> = ({
  onRegister,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{8,}$/;

    if (
      !formData.name ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      return "Todos los campos son obligatorios.";
    }
    if (!emailRegex.test(formData.email)) {
      return "El correo electrónico no es válido.";
    }
    if (!passwordRegex.test(formData.password)) {
      return "La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial.";
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
    } else {
      setError(null);
      onRegister(formData.name);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-black mb-4">Regístrate</h2>

      <form onSubmit={handleSubmit} className="w-80 flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-lg bg-gray-100 text-black"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={formData.lastName}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-lg bg-gray-100 text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-lg bg-gray-100 text-black"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-lg bg-gray-100 text-black"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button type="submit" className="bg-black text-white hover:bg-gray-800">
          Registrarse
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
