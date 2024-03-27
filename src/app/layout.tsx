import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../components/theme/theme'
import "./globals.css";

export const metadata: Metadata = {
  title: "DnD Character Sheet",
  description: "Created with Love, Ryan Duer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
          {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
