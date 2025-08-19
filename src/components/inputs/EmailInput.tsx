import type{ ChangeEvent } from "react";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const EmailInput = ({ value, onChange }: EmailInputProps) => {
  return (
    <input
      type="email"
      placeholder="Correo electrónico"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    />
  );
};
