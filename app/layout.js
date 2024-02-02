import { ScheduleProvider } from "@/contexts/schedule.context";
import "./globals.scss";
import { UserProvider } from "@/contexts/user.context";

export const metadata = {
  title: "SAMI | Room Booking Web App",
  description: "Room booking web app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ScheduleProvider>
            {children}
          </ScheduleProvider>
        </UserProvider>
      </body>
    </html>
  );
}
