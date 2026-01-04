"use client";

import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import theme from "@/theme/muiTheme";
import createEmotionCache from "@/theme/emotionCache";
import ClientCssBaseline from "@/components/ClientCssBaseline";

const clientSideEmotionCache = createEmotionCache();

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <ClientCssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
}
