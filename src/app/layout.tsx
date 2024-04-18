import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import StoreProvider from "@/store/StoreProvider";

export const metadata: Metadata = {
  title: "Bookstore",
  description: "Bookstore for Blazesoft's Frontend Developer test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <html lang="en">
            <body>{children}</body>
          </html>
        </StoreProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
