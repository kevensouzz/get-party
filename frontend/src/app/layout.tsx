import "./globals.css";
import Header from "@/components/header/Header";
import Provider from "./provider";

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
      <body className={`flex flex-col bg-neutral-900 select-none text-white`}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
