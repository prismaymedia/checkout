import { useState } from "react";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  //const router = useRouter();
  const [config, setConfig] = useState({});
  //console.log(router.query);
  console.log(config);
  return <Component {...pageProps} />;
}

export default MyApp;
