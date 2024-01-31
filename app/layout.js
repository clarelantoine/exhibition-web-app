// import { Inter } from "next/font/google";
// import {Dinnextw1g} from "@/public/fonts/dinnextw1g_medium.woff"
import "./globals.scss";
import { UserProvider } from "@/contexts/user.context";

// const dinnextw1g = Dinnextw1g({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
