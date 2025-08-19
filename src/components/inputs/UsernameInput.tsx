import type { ChangeEvent } from "react";

interface UsernameInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const UsernameInput = ({ value, onChange }: UsernameInputProps) => {
  return (
    <input
      type="text"
      placeholder="Nombre de usuario"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    />
  );
};
