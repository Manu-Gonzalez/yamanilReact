import type {FormEvent, ReactNode } from "react";

interface AuthFormProps {
  title: string;
  onSubmit: () => void;
  children: ReactNode;
}

export const AuthForm = ({ title, onSubmit, children }: AuthFormProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {children}
      <button type="submit">{title}</button>
    </form>
  );
};


