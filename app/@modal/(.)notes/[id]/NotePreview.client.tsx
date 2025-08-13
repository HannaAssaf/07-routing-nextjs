"use client";
import { useRouter } from "next/navigation";

export default function BackBtn({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button onClick={handleBack} aria-label="Close Note Preview">
      {children}
    </button>
  );
}
