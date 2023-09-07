"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export function AuthGuard({ children }) {
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      redirect("/auth");
    }
  }, []);

  return children;
}
