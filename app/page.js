"use client";
import Footer from "@/components/Footer";
import Heropage from "@/components/Heropage";
import LoadingPage from "@/components/LoadingPage";
import NavBar from "@/components/NavBar";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Page4 from "@/components/Page4";
import { useEffect, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6700);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <ReactLenis
            root
            options={{ lerp: 0.03, duration: 10, smoothTouch: true }}
          >
            <main
              className="main w-full relative flex flex-col items-center overflow-x-hidden  "
              style={{
                background: `radial-gradient(circle at 50% 50%, #2a2e36, #272a32, #24272d, #202329, #1d2024, #1a1c20, #17191c, #141518, #101114, #0b0c0e, #060608, #000000)`,
              }}
            >
              <NavBar />
              <Heropage />
              <Page2 />
              <Page3 />
              <Page4 />
              <Footer />
            </main>
          </ReactLenis>
        </>
      )}
    </>
  );
}
