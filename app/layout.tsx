import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { UserProvider } from './context/UserContext'

export const metadata: Metadata = {
  title: "Fadj-ma",
  description: "Votre pharmacie en ligne",
    icons: {
        icon: '/favicon.ico', // Place favicon.ico in the public folder
    },
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
      <html>
      <body>
      <UserProvider>
          <StyledComponentsRegistry>
              {children}
          </StyledComponentsRegistry>
      </UserProvider>

      </body>
      </html>
  )
}
