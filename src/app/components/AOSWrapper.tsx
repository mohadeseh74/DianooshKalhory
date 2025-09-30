// app/components/AOSWrapper.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 700, // animation duration in ms
      once: true, // animate only once
      offset: 120, // offset (in px) from the original trigger point
    });
  }, []);

  return <>{children}</>;
}
