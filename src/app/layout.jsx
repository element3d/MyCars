import React from "react";
import { Inter } from "next/font/google";

import "./globals.css";
import TopBar from "@/components/TopBar";
import { ReactQueryProvider } from "@/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "myauto",
  description: "Buy/Sell Cars",
};

export default function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar />
          {children}
          <ReactQueryDevtools />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
