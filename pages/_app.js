import ProductNavbar from "@/components/ProductNavbar";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return(
    <>
     <ProductNavbar/>
     <Component {...pageProps} />
    </>
  );
}
