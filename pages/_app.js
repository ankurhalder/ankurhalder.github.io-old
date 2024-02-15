import { Fragment } from "react";
import { Analytics } from "@vercel/analytics/react";
import "../styles/main.scss";
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <Analytics></Analytics>
    </Fragment>
  );
}

export default MyApp;
