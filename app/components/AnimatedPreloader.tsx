"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function AnimatedPreloader() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    setIsVisible(true);

    let value = 0;
    const tick = () => {
      value += Math.floor(Math.random() * 12) + 6;
      if (value >= 100) value = 100;
      setProgress(value);
      if (value < 100) {
        window.setTimeout(tick, 120);
      }
    };

    if (!prefersReducedMotion) tick();
    else setProgress(100);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, prefersReducedMotion ? 400 : 2400);

    return () => window.clearTimeout(hideTimer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-9999 overflow-hidden bg-background"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(57,255,20,0.20),transparent_45%),radial-gradient(circle_at_75%_70%,rgba(176,38,255,0.18),transparent_50%)]" />
          <div className="absolute inset-0 opacity-40 mask-[radial-gradient(circle_at_center,black_35%,transparent_75%)] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[56px_56px]" />

          <div className="relative h-full w-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-8 px-6">
              <div className="relative w-[260px] h-[260px] flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/15"
                  animate={prefersReducedMotion ? {} : { rotate: 360 }}
                  transition={{ duration: 2.2, ease: "linear", repeat: Infinity }}
                  style={{
                    borderTopColor: "rgba(57,255,20,0.95)",
                    borderBottomColor: "rgba(176,38,255,0.85)",
                  }}
                />
                <motion.div
                  className="absolute inset-[38px] rounded-full border border-white/10"
                  animate={prefersReducedMotion ? {} : { rotate: -360 }}
                  transition={{ duration: 1.45, ease: "linear", repeat: Infinity }}
                  style={{
                    borderLeftColor: "rgba(57,255,20,0.75)",
                    borderRightColor: "rgba(176,38,255,0.75)",
                  }}
                />

                <motion.div
                  initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
                  animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="rounded-2xl overflow-hidden shadow-[0_0_26px_rgba(57,255,20,0.35),0_0_62px_rgba(176,38,255,0.28)]"
                >
                  <motion.div
                    animate={prefersReducedMotion ? {} : { scale: [1, 1.04, 1] }}
                    transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
                  >
                    <Image src="/logo.png" alt="Sandeep Gaming Store" width={120} height={120} className="rounded-2xl" />
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                className="w-full max-w-[420px] text-center"
              >
                <p className="text-white font-black tracking-tight text-2xl">
                  Sandeep Gaming Store
                </p>
                <p className="text-gray-300 mt-2">
                  Loading premium gaming experience…
                </p>

                <div className="mt-6 h-3 w-full rounded-full border border-white/15 bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#39ff14_0%,#88ff70_45%,#b026ff_100%)] shadow-[0_0_16px_rgba(57,255,20,0.40)]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                </div>

                <p className="text-gray-300/90 text-sm mt-3 tracking-wide">
                  {progress}%
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

