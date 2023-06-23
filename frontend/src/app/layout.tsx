import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Get Party",
  description: "fullstack aplication, using ReactJS, NodeJS, MongoDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col bg-neutral-900 w-screen h-screen max-h-full max-w-full select-none text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
