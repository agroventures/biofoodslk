import React, { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1.2));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-light overflow-hidden">

      {/* Large decorative letter */}
      <span className="pointer-events-none absolute left-0 top-0 select-none text-[40vw] font-black leading-none text-black/3">
        B
      </span>

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-10">

        {/* Logo + brand name */}
        <div className="flex flex-col items-center gap-5">
          <div className="rounded-full bg-white shadow-sm border border-brand-primary/10 p-5">
            <img src="/logo.png" alt="Bio Foods" className="w-12 h-12 object-contain" fetchPriority="high" />
          </div>

          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.45em] text-neutral-400 mb-2">
              Est. Sri Lanka
            </p>
            <h1
              className="text-4xl tracking-tight text-neutral-900"
              style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
            >
              Bio <span className="text-brand-secondary">Foods</span>
            </h1>
            <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400 mt-1">
              Nurturing Nature
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-48 flex flex-col gap-2">
          <div className="h-px w-full bg-neutral-200 overflow-hidden">
            <div
              className="h-full bg-brand-secondary transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] tracking-[0.2em] text-neutral-400 font-mono">
            <span>Loading</span>
            <span>{Math.floor(progress)}%</span>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-4 px-8">
        <div className="h-px flex-1 max-w-20 bg-neutral-200" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
          Premium Organic Exports
        </span>
        <div className="h-px flex-1 max-w-20 bg-neutral-200" />
      </div>
    </div>
  );
};

export default Loader;
