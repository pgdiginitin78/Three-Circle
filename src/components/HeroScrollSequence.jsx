import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 250;
const currentFrame = (index) =>
  `/assets/heroSection/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;

export default function HeroScrollSequence({ triggerRef }) {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current || !triggerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // We store the current frame index in an object so GSAP can animate it
    const seq = { frame: 0 };

    const render = () => {
      // Draw the current frame, using object-cover logic
      const img = images[seq.frame];
      if (!img || !img.complete) return;

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        // Image is wider than canvas
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      } else {
        // Image is taller than canvas
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const handleResize = () => {
      // Use window.devicePixelRatio for sharp canvas rendering
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      render();
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial sizing & render

    // Force render of the very first frame immediately if it's loaded
    if (images[0].complete) {
      render();
    } else {
      images[0].onload = render;
    }

    // Set up GSAP ScrollTrigger
    const st = gsap.to(seq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${window.innerHeight * 4}`, // Total scroll distance (4 screens height)
        scrub: 0.5,
        pin: true,
      },
      onUpdate: render,
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (st.scrollTrigger) {
        st.scrollTrigger.kill();
      }
      st.kill();
    };
  }, [images, triggerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
  );
}
