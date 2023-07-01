import { useEffect, useState } from "react";

const useResolution = () => {
  const [isMobile, setIsMobile] = useState(false);
  // const [isTablet, setIsTablet] = useState(false);
  const [append, setAppendBottom] = useState(0);

  useEffect(() => {
    function resize() {
      if (window.innerWidth < 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }

      if (window.innerWidth <= 1010) {
        setAppendBottom((window.innerWidth / 1010) * 10);
      } else {
        setAppendBottom((prev) =>
          prev < 1 && window.innerWidth / 1010 >= 1 ? 0 : --prev
        );
      }
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    let isChanged = true;
    if (window.innerWidth < 600 && isChanged) {
      setIsMobile(true);
    }

    if (window.innerWidth > 600 && isChanged) {
      setIsMobile(false);
    }

    if (window.innerWidth <= 1010) {
      setAppendBottom((window.innerWidth / 1010) * 10);
    } else {
      setAppendBottom((prev) =>
        prev < 1 && window.innerWidth / 1010 >= 1 ? 0 : --prev
      );
    }

    return () => {
      isChanged = false;
    };
  }, []);

  return {
    isMobile,
    append,
  };
};

export default useResolution;
