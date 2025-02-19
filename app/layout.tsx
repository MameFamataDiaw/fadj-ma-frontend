
import { metadata } from "./metadata";
import StyledComponentsRegistry from "@/lib/registry";
import { UserProvider } from './context/UserContext';
import ClientLayout from "./ClientLayout";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <UserProvider>
          <StyledComponentsRegistry>
            <ClientLayout>{children}</ClientLayout>
          </StyledComponentsRegistry>
        </UserProvider>
      </body>
    </html>
  )
}
