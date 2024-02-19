import { Fragment } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "../styles/main.scss";
if (process.env.NODE_ENV === "production") {
  console.error = () => {};
}
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <Analytics></Analytics>
      <SpeedInsights></SpeedInsights>
    </Fragment>
  );
}

export default MyApp;
