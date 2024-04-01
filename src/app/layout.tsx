import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Theme } from '../components/theme/Theme'
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <AppRouterCacheProvider>
          <Theme>
          {children}
          </Theme>
        </AppRouterCacheProvider>
  );
}
