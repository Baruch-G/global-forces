import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TopNavbar from "~/components/TopNavbar";
import theme from "~/theme.json";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ClerkProvider
        {...pageProps}
        appearance={{
          variables: {
            colorPrimary: theme.primary,
          },
        }}
      >
        <TopNavbar />
        <Component {...pageProps} />
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
