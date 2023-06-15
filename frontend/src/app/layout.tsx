import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "MERN APP",
  description: "fullstack aplication, using ReactJS, NodeJS, MongoDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col bg-neutral-900 w-screen h-screen select-none text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
