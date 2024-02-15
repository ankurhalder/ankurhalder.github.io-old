import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    var _mtm = (window._mtm = window._mtm || []);
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src =
      "https://cdn.matomo.cloud/ankurhalder.matomo.cloud/container_1F2GwP8E.js";
    s.parentNode.insertBefore(g, s);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
