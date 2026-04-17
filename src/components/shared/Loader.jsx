import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

const Loader = () => {
    const [progress, setProgress] = useState(0);

    // Simulate loading progress
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
            <div className="relative flex items-center justify-center">
                
                {/* Outer Progress Ring */}
                <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="transparent"
                        className="text-slate-100"
                    />
                    <circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="transparent"
                        strokeDasharray={377}
                        strokeDashoffset={377 - (377 * progress) / 100}
                        strokeLinecap="round"
                        className="text-brand-primary transition-all duration-150 ease-out"
                    />
                </svg>

                {/* Center Icon with Pulse Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        {/* Glowing pulse behind the leaf */}
                        <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-xl animate-ping" />
                        
                        <div className="relative bg-white p-4 rounded-full shadow-sm border border-brand-primary/10">
                            <img src="/logo.png" alt="Logo" className="w-12" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Brand Text */}
            <div className="mt-8 text-center">
                <h2 className="text-xl font-black text-slate-900 tracking-tighter uppercase">
                    Bio <span className="text-brand-primary">Foods</span>
                </h2>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mt-2">
                    Nurturing Nature
                </p>
                
                {/* Percentage Indicator */}
                <div className="mt-4 tabular-nums text-xs font-mono text-slate-300">
                    {progress}%
                </div>
            </div>
        </div>
    );
};

export default Loader;