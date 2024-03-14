import type { Metadata } from "next";

export default function RootLayout1({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <>
            {children}
        </>
  );
}
