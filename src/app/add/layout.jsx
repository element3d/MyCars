import { AuthGuard } from "@/components/authGuard";
import React from "react";

export const metadata = {
  title: "Add auto",
  description: "Sell",
};

export default function AddNewPostLayout({ children }) {
  return (
    <>
      <AuthGuard>{children}</AuthGuard>
    </>
  );
}
