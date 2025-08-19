import type { ChangeEvent } from "react";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const PasswordInput = ({ value, onChange }: PasswordInputProps) => {
  return (
    <input
      type="password"
      placeholder="Contraseña"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    />
  );
};
