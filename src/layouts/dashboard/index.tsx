import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { DashboardLayoutProps } from "./types";
import { Header } from "@/components/header";

export function DashboardLayout({ title, children }: DashboardLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Header />
        <Box>{children}</Box>
      </Box>
    </>
  );
}
