import { useState, useEffect } from "react";

function getWindowDimensions() {
  if (navigator.platform === "iPhone") {
    const { width: elementWidth, height: elementHeight } = window.screen;
    return {
      elementWidth,
      elementHeight
    };
  } else {
    const { innerWidth: elementWidth, innerHeight: elementHeight } = window;
    return {
      elementWidth,
      elementHeight
    };
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return windowDimensions;
}

export function useElementDimension(ref) {
  const [elementDimensions, setElementDimensions] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const handleResize = () => {
      setElementDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [ref]);
  return elementDimensions;
}
